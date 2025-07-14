import React from 'react';
import { Cookie, Settings, AlertTriangle, Info } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 my-4">
      <div className="text-center space-y-4">
        <Cookie className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-4xl font-bold">Cookie Policy</h1>
        <p className="text-base-content/70">
          Last updated: {new Date().toLocaleDateString('en-IN')}
        </p>
      </div>

      <div className="alert alert-info">
        <Info className="h-5 w-5" />
        <div>
          <h4 className="font-semibold">What Are Cookies?</h4>
          <p className="text-sm">
            Cookies are small text files stored on your device that help us enhance your 
            experience on DCode DSA. They remember your preferences and improve functionality.
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-green-50 border border-green-200 p-4">
              <h3 className="font-semibold mb-2 text-green-800">Essential Cookies</h3>
              <p className="text-sm text-green-700 mb-2">
                These cookies are necessary for the website to function properly.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                <li>Authentication and login status</li>
                <li>Security and fraud prevention</li>
                <li>Basic site functionality</li>
                <li>Session management</li>
              </ul>
              <div className="mt-3">
                <span className="badge badge-success badge-sm">Always Active</span>
              </div>
            </div>
            <div className="card bg-blue-50 border border-blue-200 p-4">
              <h3 className="font-semibold mb-2 text-blue-800">Analytics Cookies</h3>
              <p className="text-sm text-blue-700 mb-2">
                Help us understand how visitors interact with our website.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                <li>Google Analytics tracking</li>
                <li>Page view statistics</li>
                <li>User behavior analysis</li>
                <li>Performance monitoring</li>
              </ul>
              <div className="mt-3">
                <span className="badge badge-primary badge-sm">Optional</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
          <div className="space-y-4">
            <div className="card bg-base-200 p-6">
              <h3 className="font-semibold mb-3">Primary Uses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Remembering your login status</li>
                  <li>Saving your preferences and settings</li>
                  <li>Maintaining your progress in courses</li>
                  <li>Personalizing your experience</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Analyzing website performance</li>
                  <li>Understanding user behavior</li>
                  <li>Improving our services</li>
                  <li>Ensuring security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Detailed Cookie Information</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="text-sm">session_id</code></td>
                  <td><span className="badge badge-success badge-sm">Essential</span></td>
                  <td>Maintains user session</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td><code className="text-sm">auth_token</code></td>
                  <td><span className="badge badge-success badge-sm">Essential</span></td>
                  <td>User authentication</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td><code className="text-sm">user_preferences</code></td>
                  <td><span className="badge badge-info badge-sm">Functional</span></td>
                  <td>Saves user settings</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td><code className="text-sm">_ga</code></td>
                  <td><span className="badge badge-primary badge-sm">Analytics</span></td>
                  <td>Google Analytics</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td><code className="text-sm">_gid</code></td>
                  <td><span className="badge badge-primary badge-sm">Analytics</span></td>
                  <td>Google Analytics</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Cookie Consent</h2>
          <div className="card bg-primary/10 p-6">
            <p className="text-base-content/80 mb-4">
              While explicit cookie consent is not yet legally mandated in India like in the EU, 
              we believe in transparency and user control. When you first visit our website, 
              you'll see a notification about our cookie usage.
            </p>
            <div className="mockup-browser border border-base-300 bg-base-100">
              <div className="mockup-browser-toolbar">
                <div className="input">https://dcodedsa.live</div>
              </div>
              <div className="bg-base-200 flex justify-center px-4 py-16">
                <div className="alert alert-info max-w-md">
                  <Cookie className="h-5 w-5" />
                  <div>
                    <h4 className="font-semibold">Cookie Notice</h4>
                    <p className="text-sm">We use cookies to enhance your experience. By continuing to use our site, you agree to our cookie policy.</p>
                    <div className="mt-3 flex gap-2">
                      <button className="btn btn-primary btn-sm">Accept All</button>
                      <button className="btn btn-ghost btn-sm">Manage Cookies</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="h-6 w-6" />
            5. Managing Your Cookie Preferences
          </h2>
          <div className="space-y-4">
            <div className="card bg-base-200 p-6">
              <h3 className="font-semibold mb-3">Browser Settings</h3>
              <p className="text-sm text-base-content/80 mb-4">
                You can control cookies through your browser settings. Here's how:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Chrome</h4>
                  <p className="text-sm">Settings → Privacy and security → Cookies</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Firefox</h4>
                  <p className="text-sm">Settings → Privacy & Security → Cookies</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Safari</h4>
                  <p className="text-sm">Preferences → Privacy → Cookies</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Edge</h4>
                  <p className="text-sm">Settings → Site permissions → Cookies</p>
                </div>
              </div>
            </div>
            
            <div className="alert alert-warning">
              <AlertTriangle className="h-5 w-5" />
              <div>
                <h4 className="font-semibold">Important Note</h4>
                <p className="text-sm">
                  Disabling essential cookies may affect the functionality of our website 
                  and your ability to access certain features.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Third-Party Cookies</h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              We may use trusted third-party services that set their own cookies:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="badge badge-primary">Google Analytics</div>
                <span className="text-sm">For website analytics and performance monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-secondary">CDN Services</div>
                <span className="text-sm">For faster content delivery and performance</span>
              </div>
            </div>
            <p className="text-sm text-base-content/70 mt-4">
              These third parties have their own privacy policies governing their use of cookies.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or applicable laws. When we do, we will:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Update the "Last updated" date at the top of this page</li>
              <li>Notify users of significant changes via email or platform notifications</li>
              <li>Provide clear information about what has changed</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Email:</strong> privacy@dcodedsa.live</li>
              <li><strong>Support:</strong> support@dcodedsa.live</li>
              <li><strong>Address:</strong> Pune, Maharashtra, India</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;