export const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 max-w-xl">
          <span className="font-serif text-lg font-bold block mb-4">Clientele Builders</span>
          <p className="text-sm text-primary-foreground/60">
            Distribution intelligence across industries. Where businesses lose money — and how to fix it.
          </p>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2026 Clientele Builders. All rights reserved.
          </p>
          <span className="text-sm text-primary-foreground/40">
            clientelebuilders.com
          </span>
        </div>
      </div>
    </footer>
  );
};
