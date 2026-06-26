import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.svg";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin/login");
        return;
      }
      
      // Query user_roles table for admin/editor privileges
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id);
      
      const hasAccess = roles?.some(r => 
        ['admin', 'editor'].includes(r.role)
      );
      
      if (!hasAccess) {
        toast({ 
          title: "Access Denied", 
          description: "Admin or editor privileges required",
          variant: "destructive" 
        });
        navigate('/');
        return;
      }
      
      setIsAuthorized(true);
    };
    
    checkAccess();
  }, [navigate, toast]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Clientele Builder" className="h-8 w-auto" />
          <Button onClick={() => supabase.auth.signOut()} variant="outline">
            Logout
          </Button>
        </div>
      </header>
      
      <main className="container max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/admin/posts" className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Manage Posts</h2>
            <p className="text-muted-foreground">Create, edit, and publish stories</p>
          </Link>
          
          <Link to="/admin/homepage" className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Manage Homepage</h2>
            <p className="text-muted-foreground">Edit every section of the homepage</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
