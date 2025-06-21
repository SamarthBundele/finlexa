
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WaitlistForm from '@/components/WaitlistForm';
import { ArrowRight, Shield, TrendingUp, PiggyBank } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  // Redirect to home page after a short delay to show the waitlist
  useEffect(() => {
    const timer = setTimeout(() => {
      // Uncomment this line if you want automatic redirect
      // navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen finlexa-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              <img 
                src="/images/finlexa_logo_nobg.png" 
                alt="Finlexa Logo" 
                className="h-16 mx-auto lg:mx-0 mb-6"
              />
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Take Control of Your 
                <span className="block">Financial Future</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Finlexa is revolutionizing personal finance management with intelligent insights, 
                automated tracking, and smart budgeting tools designed for the modern lifestyle.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="bg-white/20 rounded-full p-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">Smart Analytics</h3>
                <p className="text-sm text-white/80">AI-powered insights</p>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="bg-white/20 rounded-full p-3 mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">Bank-Level Security</h3>
                <p className="text-sm text-white/80">Your data is protected</p>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="bg-white/20 rounded-full p-3 mb-3">
                  <PiggyBank className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">Smart Savings</h3>
                <p className="text-sm text-white/80">Automated goals</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start text-white/90 text-sm">
              <span>Join 1000 early adopters</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>

            <div className="mt-8">
              <button 
                onClick={() => navigate('/home')}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Finlexa →
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <WaitlistForm />
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm">
            Expected launch: Q2 2026 • Free during beta period
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
