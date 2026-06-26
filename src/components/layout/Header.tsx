import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-lg font-bold text-primary tracking-tight">
              Clientele Builders
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
