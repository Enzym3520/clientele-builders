import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-5xl md:text-6xl font-semibold mb-8">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">At Clientele Builder, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We collect information that you provide directly to us, such as when you subscribe to our newsletter, create an account, or contact us for support. This may include:</p>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>Name and email address</li>
            <li>Professional information</li>
            <li>Communications with us</li>
            <li>Usage data and analytics</li>
          </ul>
          <h2 className="text-3xl font-semibold mt-12 mb-6">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We use the information we collect to:</p>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Send you newsletters and marketing communications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze usage patterns and optimize user experience</li>
            <li>Protect against fraud and unauthorized access</li>
          </ul>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Information Sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">You have the right to:</p>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>Access and update your personal information</li>
            <li>Unsubscribe from marketing communications</li>
            <li>Request deletion of your data</li>
            <li>Object to certain data processing activities</li>
          </ul>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">If you have questions about this Privacy Policy, please contact us at privacy@clientelebuilder.com</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
