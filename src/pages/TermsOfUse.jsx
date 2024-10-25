import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';

const TermsPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="relative bg-customGrey">
          {/* Navigation Menu */}
          <div className="w-full fixed top-0 left-0 z-10 bg-customGrey">
            <Navbar />
          </div>
        </header>

        {/* Terms and Conditions Section */}
        <div className="mt-32"> {/* Adjust margin-top to accommodate Navbar height */}
          <main className="flex flex-col bg-white p-6 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

            <div className="space-y-6 max-w-3xl mx-auto text-justify">
              <p className="text-lg">
                **Effective Date:** [Insert Date]
              </p>

              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing, browsing, or using the Cintana Alliance website (the “Site”), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and to comply with all applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-semibold">2. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time, without prior notice. All changes are effective immediately upon posting and apply to all access and use of the Site thereafter.
              </p>

              <h2 className="text-2xl font-semibold">3. Use of the Site</h2>
              <p>
                You agree to use the Site only for lawful purposes. You are prohibited from using the Site to:
              </p>
              <ul className="list-disc ml-6">
                <li>Violate any applicable local, national, or international law or regulation.</li>
                <li>Transmit any unsolicited or unauthorized advertising or spam.</li>
                <li>Distribute illegal or offensive content or content that infringes on the rights of others.</li>
                <li>Disrupt the functionality of the Site.</li>
              </ul>

              <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
              <p>
                All content on the Site, including but not limited to text, images, and software, is the property of Cintana Alliance or its licensors and is protected by copyright and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-semibold">5. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites or resources. We are not responsible for the availability or content of these sites and accessing third-party sites is at your own risk.
              </p>

              <h2 className="text-2xl font-semibold">6. User Content</h2>
              <p>
                If you submit content on the Site, you grant Cintana Alliance a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute the content. You represent that you own or control all rights to the content.
              </p>

              <h2 className="text-2xl font-semibold">7. Privacy</h2>
              <p>
                Your use of the Site is governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-2xl font-semibold">8. Disclaimers</h2>
              <p>
                The Site and its content are provided “as is” without warranties of any kind. We do not guarantee the accuracy or completeness of the information on the Site.
              </p>

              <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Cintana Alliance is not liable for any damages arising out of your use of or inability to use the Site or its content.
              </p>

              <h2 className="text-2xl font-semibold">10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold Cintana Alliance harmless from any claims or liabilities arising from your use of the Site or violation of these Terms of Use.
              </p>

              <h2 className="text-2xl font-semibold">11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Site at our sole discretion, without notice, for any violation of these Terms.
              </p>

              <h2 className="text-2xl font-semibold">12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of [Your Jurisdiction]. Any legal action related to the Site will be instituted in the courts of [Your Jurisdiction].
              </p>

              <h2 className="text-2xl font-semibold">13. Severability</h2>
              <p>
                If any provision of these Terms is found unlawful or unenforceable, the remaining provisions will continue in full force.
              </p>

              <h2 className="text-2xl font-semibold">14. Entire Agreement</h2>
              <p>
                These Terms of Use, along with our Privacy Policy, constitute the entire agreement between you and Cintana Alliance regarding the use of the Site.
              </p>

              <p className="text-lg mt-8">
                **Contact Information**  
                If you have any questions about these Terms of Use, please contact us at:
                <br />
                Sintana Alliance
                anshsharma712.as@gmail.com  
                [Physical Address]
              </p>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-auto">
          <FooterComponent />
        </footer>
      </div>
    </>
  );
}

export default TermsPage;
