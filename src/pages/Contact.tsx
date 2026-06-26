import { useState } from "react";
import { z } from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validated = contactSchema.parse(formData);
      console.log("Contact form validated:", validated);
      toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ title: "Validation Error", description: error.errors[0].message, variant: "destructive" });
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Have questions, feedback, or collaboration ideas? We'd love to hear from you.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <Input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-card border-border" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-card border-border" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <Input id="subject" type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="bg-card border-border" placeholder="What's this about?" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <Textarea id="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-card border-border min-h-[200px]" placeholder="Tell us more..." />
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
        </form>
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm">hello@clientelebuilder.com</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <p className="text-muted-foreground text-sm">@clientelebuilder on all platforms</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
