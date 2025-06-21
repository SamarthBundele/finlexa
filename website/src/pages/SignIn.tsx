
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement sign-in logic with Supabase
    console.log('Sign in attempt:', formData);
  };

  return (
    <div className="min-h-screen hero-section flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
      
      {/* Back button */}
      <Link 
        to="/home" 
        className="absolute top-6 left-6 glass-effect p-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300 z-10"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/home" className="inline-block group">
            <img 
              src="/lovable-uploads/f6653990-148c-483c-bb2b-3ff64e04e466.png" 
              alt="Finlexa Logo" 
              className="h-12 mx-auto mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3 gradient-text bg-gradient-to-r from-white to-blue-100">
            Welcome Back
          </h1>
          <p className="text-white/90 text-lg">Sign in to your Finlexa account</p>
        </div>

        <Card className="enhanced-card border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold finlexa-text-gradient">Sign In</CardTitle>
            <CardDescription className="text-gray-600">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="enhanced-input border-0 h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="enhanced-input border-0 h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full enhanced-button text-white h-12 text-lg font-semibold shadow-lg">
                Sign In to Dashboard
              </Button>
            </form>

            <div className="mt-8 text-center space-y-4">
              <Link 
                to="/forgot-password" 
                className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
              >
                Forgot your password?
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link 
                    to="/signup" 
                    className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
