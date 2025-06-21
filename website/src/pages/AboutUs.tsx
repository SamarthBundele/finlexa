
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, TrendingUp, Shield, Heart } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      experience: "15+ years in FinTech",
      bio: "Former Goldman Sachs analyst with a passion for democratizing financial education.",
      initials: "AT"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      experience: "12+ years in AI/ML",
      bio: "Led engineering teams at Google and Stripe, specializing in financial AI systems.",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Finance",
      experience: "20+ years in Wealth Management",
      bio: "Former VP at Morgan Stanley, expert in portfolio management and risk assessment.",
      initials: "MR"
    },
    {
      name: "Emily Davis",
      role: "Head of Education",
      experience: "10+ years in Financial Education",
      bio: "Former professor of Finance at NYU, passionate about making finance accessible to all.",
      initials: "ED"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Your financial data is protected with bank-level security and encryption."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every feature is designed with our users' success and experience in mind."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge financial tools and insights."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where everyone can learn and grow together."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "98%", label: "User Satisfaction" },
    { number: "$2.5B+", label: "Assets Tracked" },
    { number: "15+", label: "Expert Advisors" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Finlexa</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize financial education and empower everyone to take control 
            of their financial future. Founded in 2023, Finlexa combines cutting-edge AI technology 
            with expert human guidance to make investing and financial planning accessible to all.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold finlexa-text-gradient mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-finlexa-gradient rounded-full p-3 mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To make financial literacy and wealth building accessible to everyone, regardless of their 
                background or starting point. We believe that with the right tools, education, and guidance, 
                anyone can achieve financial independence and security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-finlexa-gradient rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A world where financial education is as fundamental as basic literacy, where AI-powered 
                insights meet human expertise, and where every individual has the knowledge and tools 
                needed to build lasting wealth and financial security.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-finlexa-lightblue rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-finlexa-blue" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-finlexa-gradient rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-finlexa-blue font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p>
                Finlexa was born from a simple observation: despite living in the information age, 
                financial literacy rates remain disappointingly low. Our founders, with backgrounds 
                spanning Wall Street, Silicon Valley, and academia, saw an opportunity to bridge 
                this gap using technology.
              </p>
              <p>
                What started as a weekend project to create better financial education tools has 
                evolved into a comprehensive platform that serves thousands of users worldwide. 
                We've combined the best of human expertise with artificial intelligence to create 
                personalized learning experiences and investment guidance.
              </p>
              <p>
                Today, Finlexa is trusted by individuals from all walks of life - from college 
                students taking their first steps into investing to seasoned professionals looking 
                to optimize their portfolios. Our commitment remains the same: to empower everyone 
                with the knowledge and tools they need to achieve financial success.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already building their financial future with Finlexa.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-finlexa-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
            <button className="border-2 border-finlexa-blue text-finlexa-blue px-8 py-3 rounded-lg font-semibold hover:bg-finlexa-lightblue transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
