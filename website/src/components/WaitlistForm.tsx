
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Phone, User } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Basic validation
  if (!formData.name || !formData.mobile || !formData.email) {
    toast.error('Please fill in all fields');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast.error('Please enter a valid email address');
    return;
  }

  // Mobile validation (basic)
  const mobileRegex = /^[+]?[\d\s-()]{10,}$/;
  if (!mobileRegex.test(formData.mobile)) {
    toast.error('Please enter a valid mobile number');
    return;
  }

  setIsLoading(true);

  try {
    const res = await axios.post('http://localhost:5000/api/waitlist', {
      name: formData.name,
      number: formData.mobile,
      email: formData.email,
    });

    console.log('✅ Backend response:', res.data);
    setIsSubmitted(true);
    toast.success('Welcome to the Finlexa waitlist!');
  } catch (err: any) {
    console.error('❌ Submission failed:', err.message);
    toast.error('Submission failed. Try again.');
  } finally {
    setIsLoading(false);
  }
};


  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-fade-in">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-finlexa-blue" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">You're on the list!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for joining the Finlexa waitlist. We'll notify you as soon as we launch.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-finlexa-blue text-finlexa-blue hover:bg-finlexa-lightblue"
          >
            Join Another Person
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-fade-in">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">Join the Waitlist</CardTitle>
        <CardDescription className="text-gray-600">
          Be the first to experience the future of personal finance management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10 h-12 border-gray-200 focus:border-finlexa-blue focus:ring-finlexa-blue"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
              Mobile Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                value={formData.mobile}
                onChange={handleInputChange}
                className="pl-10 h-12 border-gray-200 focus:border-finlexa-blue focus:ring-finlexa-blue"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 h-12 border-gray-200 focus:border-finlexa-blue focus:ring-finlexa-blue"
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 finlexa-gradient text-white font-semibold text-base hover:opacity-90 transition-opacity"
            disabled={isLoading}
          >
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          By joining, you agree to receive updates about Finlexa. Unsubscribe anytime.
        </p>
      </CardContent>
    </Card>
  );
};

export default WaitlistForm;
