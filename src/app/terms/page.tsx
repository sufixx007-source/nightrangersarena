import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title mb-10">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using Night Rangers Arena games and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Service</h2>
              <p>Our games are intended for entertainment purposes. You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
              <p>All content, including graphics, code, and gameplay mechanics, is the property of Night Rangers Arena and is protected by copyright laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Conduct</h2>
              <p>You agree not to engage in any behavior that disrupts the service or experience for other users, including hacking, cheating, or harassment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
              <p>Night Rangers Arena shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Your continued use of the service after changes are posted constitutes acceptance of the new terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at: <a href="mailto:aliahmad0262626@gmail.com" className="text-primary font-bold hover:underline">aliahmad0262626@gmail.com</a></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
