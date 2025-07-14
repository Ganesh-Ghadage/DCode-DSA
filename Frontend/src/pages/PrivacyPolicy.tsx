import React from 'react';
import { Shield, Database, Users, Lock, AlertCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 my-4">
      <div className="text-center space-y-4">
        <Shield className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-base-content/70">
          Last updated: {new Date().toLocaleDateString('en-IN')}
        </p>
      </div>

      <div className="alert alert-info">
        <AlertCircle className="h-5 w-5" />
        <div>
          <h4 className="font-semibold">Compliance Notice</h4>
          <p className="text-sm">
            This Privacy Policy is designed to comply with the Information Technology Act, 2000 
            and the Sensitive Personal Data or Information (SPDI) Rules, 2011.
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="h-6 w-6" />
            1. Information We Collect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Full name and email address</li>
                <li>Account credentials (encrypted passwords)</li>
                <li>Profile information and preferences</li>
                <li>Learning progress and achievements</li>
              </ul>
            </div>
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold mb-2">Technical Data</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>IP address and location data</li>
                <li>Device information and browser type</li>
                <li>Usage analytics and session data</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <div className="space-y-4">
            <div className="card bg-primary/10 p-6">
              <h3 className="font-semibold mb-3">Primary Uses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Account creation and authentication</li>
                  <li>Personalizing your learning experience</li>
                  <li>Tracking progress and achievements</li>
                  <li>Providing customer support</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Sending important platform updates</li>
                  <li>Improving our services and features</li>
                  <li>Ensuring platform security</li>
                  <li>Compliance with legal requirements</li>
                </ul>
              </div>
            </div>
            <p className="text-base-content/80 text-sm">
              We process your data based on legitimate interests, contractual necessity, 
              and with your consent where required by law.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="h-6 w-6" />
            3. Data Security and Storage
          </h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>End-to-end encryption for sensitive data</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Data backup and recovery systems</li>
                <li>Compliance with Indian data protection laws</li>
                <li>Staff training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="h-6 w-6" />
            4. Data Sharing and Disclosure
          </h2>
          <div className="alert alert-warning mb-4">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">We never sell your personal data to third parties.</span>
          </div>
          <div className="space-y-4">
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold mb-2">Limited Sharing</h3>
              <p className="text-sm text-base-content/80 mb-2">
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>With trusted service providers (analytics, hosting, support)</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights Under Indian Law</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-primary/10 p-4">
              <h3 className="font-semibold mb-2">Access Rights</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Request access to your personal data</li>
                <li>Obtain copies of your information</li>
                <li>Understand how your data is processed</li>
              </ul>
            </div>
            <div className="card bg-secondary/10 p-4">
              <h3 className="font-semibold mb-2">Control Rights</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for processing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-4">
              <li>Provide our services effectively</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain security and prevent fraud</li>
            </ul>
            <p className="text-sm text-base-content/70">
              When you delete your account, we will remove your personal information within 
              30 days, except where retention is required by law.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              For any privacy-related questions or to exercise your rights, please contact us:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Privacy Officer:</strong> privacy@dcodedsa.live</li>
              <li><strong>Data Protection:</strong> dpo@dcodedsa.live</li>
              <li><strong>Support:</strong> support@dcodedsa.live</li>
              <li><strong>Address:</strong> Pune, Maharashtra, India</li>
            </ul>
            <p className="text-sm text-base-content/70 mt-4">
              We are committed to protecting your privacy and will respond to your requests 
              within 30 days as required by Indian law.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;