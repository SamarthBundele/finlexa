
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Users, 
  BarChart3, 
  DollarSign,
  PieChart,
  Target,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Investment Tracking",
      description: "Monitor your portfolio performance with real-time analytics and AI-powered insights."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption and security protocols."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your financial dashboard anywhere with our responsive, mobile-optimized platform."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get personalized advice from certified financial advisors and trading experts."
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Users", icon: Users },
    { value: "$2B+", label: "Assets Tracked", icon: DollarSign },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "4.9★", label: "User Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/images/finlexa_logo_nobg.png" 
              alt="Finlexa Logo" 
              className="h-16 mx-auto mb-6 drop-shadow-2xl"
            />
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Master Your{' '}
              <span className="gradient-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Financial Future
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of investors who trust Finlexa to track, analyze, and optimize their portfolios. 
              Advanced AI meets intuitive design for smarter financial decisions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button className="enhanced-button px-8 py-4 text-lg font-semibold text-white shadow-2xl">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="finlexa-text-gradient">Finlexa</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to simplify complex financial management and accelerate your wealth building journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card p-6 text-center border-0">
                <CardHeader className="pb-4">
                  <div className="finlexa-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 finlexa-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join the financial revolution. Start tracking, analyzing, and optimizing your investments today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button className="enhanced-button bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-2xl">
                Get Started Free
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold">
                Explore Courses
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <img 
            src="/images/finlexa_logo_sq.png" 
            alt="Finlexa Logo" 
            className="h-8 mx-auto mb-4"
          />
          <p className="text-gray-400 mb-6">
            Empowering financial freedom through intelligent portfolio management.
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            <Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
