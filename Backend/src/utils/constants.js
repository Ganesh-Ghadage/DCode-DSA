export const cookieOptions = {
	httpOnly: true,
	sameSite: "strict",
	secure: process.env.NODE_ENV !== "development",
};
