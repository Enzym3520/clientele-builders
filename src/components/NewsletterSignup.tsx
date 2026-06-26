import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterSignupProps {
  variant?: "default" | "inline";
}

export const NewsletterSignup = ({ variant = "default" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Drip embed integration
    // User will paste their Drip form HTML here
    console.log("Newsletter signup:", email);
    
    // Push to dataLayer for GTM tracking
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "newsletter_subscribed" });
    }
    
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  if (variant === "inline") {
    return (
      <div id="newsletter-inline" className="bg-card border border-border rounded-lg p-8 my-12">
        <h3 className="text-2xl font-semibold mb-2">Join the Clientele Builder Newsletter</h3>
        <p className="text-muted-foreground mb-6">
          Weekly systems, strategy, and creative workflow.
        </p>
        
        {status === "success" ? (
          <div className="bg-primary/10 text-primary px-4 py-3 rounded">
            Thanks for subscribing! Check your email to confirm.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
        )}
        
        {status === "error" && (
          <p className="text-destructive text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
        
        {/* Drip embed placeholder */}
        <div className="hidden" id="drip-embed-placeholder">
          {/* User will paste their Drip form HTML here */}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <h2 className="text-3xl font-semibold mb-2">Join the Clientele Builder Newsletter</h2>
      <p className="text-muted-foreground mb-6">
        Weekly systems, strategy, and creative workflow.
      </p>
      
      {status === "success" ? (
        <div className="bg-primary/10 text-primary px-4 py-3 rounded">
          Thanks for subscribing! Check your email to confirm.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-background border-border"
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Subscribe
          </Button>
        </form>
      )}
      
      {status === "error" && (
        <p className="text-destructive text-sm mt-2">
          Something went wrong. Please try again.
        </p>
      )}
      
      {/* Drip embed placeholder */}
      <div className="hidden" id="drip-embed-placeholder">
        {/* User will paste their Drip form HTML here */}
      </div>
    </div>
  );
};
