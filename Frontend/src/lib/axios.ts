import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true,
});

let isRefreshing = false;
let failedQueue: {
	resolve: (value?: AxiosResponse | PromiseLike<AxiosResponse>) => void;
	reject: (error: AxiosError) => void;
	config: AxiosRequestConfig;
}[] = [];

const processQueue = (
	error: AxiosError | null,
	response?: AxiosResponse
): void => {
	failedQueue.forEach(({ resolve, reject, config }) => {
		if (error) {
			reject(error);
		} else if (response) {
			resolve(axiosInstance(config));
		}
	});
	failedQueue = [];
};

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

		// Token expired
		if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject, config: originalRequest });
				});
			}

			originalRequest._retry = true;
			isRefreshing = true;

			try {
				// Attempt token refresh
				await axiosInstance.post("/auth/refresh-tokens");

				processQueue(null);
				return axiosInstance(originalRequest);
			} catch (refreshError) {
				processQueue(refreshError as AxiosError);

				console.log(refreshError)
				// 🔒 Auto logout if error in refreshing tokens
				// await axiosInstance.post("/auth/logout")

				return Promise.reject(refreshError);
			} finally {
				isRefreshing = false;
			}
		}

		return Promise.reject(error);
	}
);
