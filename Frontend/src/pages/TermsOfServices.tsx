import React from 'react';
import { Shield, AlertTriangle, Scale, FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 my-4">
      <div className="text-center space-y-4">
        <Shield className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-base-content/70">
          Last updated: {new Date().toLocaleDateString('en-IN')}
        </p>
      </div>

      <div className="alert alert-warning">
        <AlertTriangle className="h-5 w-5" />
        <span>
          By using DCode DSA, you agree to be bound by these Terms of Service. 
          Please read them carefully.
        </span>
      </div>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6" />
            1. Introduction
          </h2>
          <p className="text-base-content/80 leading-relaxed">
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User") 
            and DCode DSA ("we", "us", "our", "Platform") regarding your use of our educational platform. 
            By accessing or using our services, you acknowledge that you have read, understood, and agree 
            to be bound by these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. User Responsibilities</h2>
          <div className="space-y-4">
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold mb-2">Prohibited Activities</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Using automated scripts, bots, or any form of scraping</li>
                <li>Sharing login credentials with other users</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Cheating or circumventing our assessment mechanisms</li>
                <li>Posting inappropriate, offensive, or harmful content</li>
              </ul>
            </div>
            <p className="text-base-content/80">
              You agree to use our platform for educational purposes only and in compliance with all 
              applicable laws and regulations. Violation of these responsibilities may result in 
              account suspension or termination.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Platform Usage</h2>
          <p className="text-base-content/80 mb-4">
            DCode DSA is an educational platform designed to help users learn Data Structures and 
            Algorithms. Our services are provided "as is" and we reserve the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base-content/80">
            <li>Modify, suspend, or discontinue any feature at any time</li>
            <li>Update our curriculum and learning materials</li>
            <li>Implement new features or remove existing ones</li>
            <li>Suspend or terminate accounts for violations of these Terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              All content on DCode DSA, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-4">
              <li>Course materials, tutorials, and documentation</li>
              <li>Code examples and problem sets</li>
              <li>Videos, images, and other multimedia content</li>
              <li>User interface design and functionality</li>
            </ul>
            <p className="text-base-content/80 text-sm">
              is owned by DCode DSA and protected by copyright laws. Users may not reproduce, 
              distribute, or create derivative works without explicit written permission.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
          <div className="alert alert-warning">
            <AlertTriangle className="h-5 w-5" />
            <div>
              <p className="text-sm">
                DCode DSA shall not be liable for any direct, indirect, incidental, special, 
                or consequential damages arising from your use or inability to use our platform. 
                This includes but is not limited to damages for loss of profits, data, or other 
                intangible losses.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Scale className="h-6 w-6" />
            6. Governing Law and Jurisdiction
          </h2>
          <div className="card bg-primary/10 p-6">
            <p className="text-base-content/80">
              These Terms of Service shall be governed by and construed in accordance with the 
              laws of India. Any disputes arising out of or relating to these Terms shall be 
              subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
          <p className="text-base-content/80">
            We reserve the right to modify these Terms at any time. Users will be notified of 
            significant changes via email or platform notifications. Continued use of the platform 
            after such modifications constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
          <div className="card bg-base-200 p-6">
            <p className="text-base-content/80 mb-4">
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Email:</strong> legal@dcodedsa.live</li>
              <li><strong>Support:</strong> support@dcodedsa.live</li>
              <li><strong>Address:</strong> Pune, Maharashtra, India</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;