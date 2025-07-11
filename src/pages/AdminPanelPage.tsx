import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { isUserAdmin } from "../lib/auth";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useEffect } from "react";
import { blink } from "../blink/client";

export function AdminPanelPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && (!user || !isUserAdmin(user))) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user || !isUserAdmin(user)) {
    return null;
  }

  const handleSignOut = () => {
    blink.auth.logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 text-gray-700">
              Signed in as <span className="font-semibold">{user.email}</span>
            </div>
            <div className="space-y-4">
              <Button className="w-full" variant="outline" onClick={() => navigate("/admin/services")}>Edit Services</Button>
              <Button className="w-full" variant="outline" onClick={() => navigate("/admin/bundles")}>Edit Bundles</Button>
              <Button className="w-full" variant="outline" onClick={() => navigate("/admin/contact")}>Edit Contact Info</Button>
              <Button className="w-full" variant="outline" onClick={() => navigate("/admin/pricing")}>Edit Pricing</Button>
              <Button className="w-full" variant="destructive" onClick={handleSignOut}>Sign Out</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}