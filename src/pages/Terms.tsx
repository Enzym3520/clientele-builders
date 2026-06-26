import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-5xl md:text-6xl font-semibold mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">By accessing and using Clientele Builder's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Use of Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:</p>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>Using our services in any way that violates applicable laws or regulations</li>
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Interfering with or disrupting our services</li>
            <li>Reproducing, distributing, or displaying our content without permission</li>
          </ul>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">All content on Clientele Builder, including text, graphics, logos, and software, is the property of Clientele Builder or its content suppliers and is protected by intellectual property laws.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">User Content</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">You retain ownership of any content you submit to our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with our services.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Disclaimer of Warranties</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">To the fullest extent permitted by law, Clientele Builder shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">If you have questions about these Terms, please contact us at legal@clientelebuilder.com</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
