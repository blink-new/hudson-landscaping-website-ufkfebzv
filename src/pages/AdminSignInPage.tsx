import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { isUserAdmin } from "../lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { blink } from "../blink/client";
import { Leaf, Lock } from "lucide-react";

export function AdminSignInPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    // If user is already signed in and is admin, redirect to admin panel
    if (user && isUserAdmin(user)) {
      navigate("/admin");
    }
  }, [user, navigate]);

  const handleSignIn = () => {
    blink.auth.login();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hudson-green to-hudson-blue">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  // If user is signed in but not admin
  if (user && !isUserAdmin(user)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hudson-green to-hudson-blue">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto p-3 bg-red-100 rounded-full w-fit mb-4">
              <Lock className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl">Access Denied</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              You are signed in as <span className="font-semibold">{user.email}</span>, 
              but you don't have admin access to this panel.
            </p>
            <div className="space-y-2">
              <Button 
                onClick={() => navigate("/")} 
                className="w-full"
                variant="outline"
              >
                Go to Homepage
              </Button>
              <Button 
                onClick={() => blink.auth.logout()} 
                className="w-full"
                variant="ghost"
              >
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If user is already admin, this will redirect via useEffect
  if (user && isUserAdmin(user)) {
    return null;
  }

  // Show sign-in for non-authenticated users
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hudson-green to-hudson-blue">
      <Card className="w-full max-w-md shadow-xl animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto p-3 bg-hudson-green rounded-full w-fit mb-4">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Admin Access</CardTitle>
          <p className="text-gray-600 mt-2">
            Sign in to access the admin panel for Hudson Landscaping & Snow
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
            <strong>Note:</strong> Only authorized admin accounts can access the admin panel. 
            Regular customers can sign in through the main navigation.
          </div>
          <Button 
            onClick={handleSignIn} 
            className="w-full btn-primary"
          >
            Sign In
          </Button>
          <Button 
            onClick={() => navigate("/")} 
            variant="outline" 
            className="w-full"
          >
            Back to Homepage
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}