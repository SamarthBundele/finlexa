
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Zap, Shield, CreditCard } from 'lucide-react';

const Payment = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      icon: Star,
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      description: 'Perfect for beginners getting started',
      features: [
        'Portfolio tracking up to $50K',
        'Basic AI insights',
        'Educational content access',
        'Email support',
        'Mobile app access',
        'Basic budgeting tools'
      ],
      popular: false,
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Zap,
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      description: 'Most popular choice for serious investors',
      features: [
        'Unlimited portfolio tracking',
        'Advanced AI recommendations',
        'All courses included',
        'Priority support',
        'Advanced analytics',
        'Tax optimization tools',
        'Custom alerts',
        'API access'
      ],
      popular: true,
      color: 'from-finlexa-blue to-finlexa-darkblue'
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: Crown,
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      description: 'For professionals and serious traders',
      features: [
        'Everything in Pro',
        'Dedicated advisor sessions',
        'Real-time market data',
        'Advanced trading tools',
        'White-glove onboarding',
        'Custom portfolio strategies',
        'Institutional-grade analytics',
        'Direct advisor access'
      ],
      popular: false,
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const getCurrentPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice;
    return monthlyCost - annualCost;
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    // TODO: Integrate with Stripe checkout
    console.log(`Selected plan: ${planId}, billing: ${billingCycle}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your financial journey with the plan that fits your needs. 
            Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-md">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-finlexa-blue text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-finlexa-blue text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
              <Badge className="ml-2 bg-green-100 text-green-800">Save 17%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <Card 
                key={plan.id} 
                className={`relative hover:shadow-xl transition-all ${
                  plan.popular ? 'ring-2 ring-finlexa-blue scale-105' : ''
                } ${isSelected ? 'ring-2 ring-finlexa-darkblue' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-finlexa-blue text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-gray-900">
                      ${getCurrentPrice(plan)}
                      <span className="text-lg text-gray-600 font-normal">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ${getSavings(plan).toFixed(2)} per year
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular || isSelected
                        ? 'finlexa-gradient text-white'
                        : 'border-2 border-finlexa-blue text-finlexa-blue hover:bg-finlexa-lightblue'
                    }`}
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    {isSelected ? 'Selected Plan' : `Choose ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Comparison */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center">Feature Comparison</CardTitle>
            <CardDescription className="text-center">
              See what's included in each plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Features</th>
                    <th className="text-center py-3 px-4">Basic</th>
                    <th className="text-center py-3 px-4">Pro</th>
                    <th className="text-center py-3 px-4">Premium</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="py-3 px-4">Portfolio Tracking</td>
                    <td className="text-center py-3 px-4">Up to $50K</td>
                    <td className="text-center py-3 px-4">Unlimited</td>
                    <td className="text-center py-3 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">AI Insights</td>
                    <td className="text-center py-3 px-4">Basic</td>
                    <td className="text-center py-3 px-4">Advanced</td>
                    <td className="text-center py-3 px-4">Premium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Course Access</td>
                    <td className="text-center py-3 px-4">Limited</td>
                    <td className="text-center py-3 px-4">Full Access</td>
                    <td className="text-center py-3 px-4">Full Access</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Advisor Sessions</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Real-time Data</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Security & Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="pt-8">
              <Shield className="h-12 w-12 text-finlexa-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">All payments processed securely with 256-bit SSL encryption</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-8">
              <CreditCard className="h-12 w-12 text-finlexa-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">30-Day Guarantee</h3>
              <p className="text-gray-600 text-sm">Not satisfied? Get a full refund within 30 days</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-8">
              <Zap className="h-12 w-12 text-finlexa-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Cancel Anytime</h3>
              <p className="text-gray-600 text-sm">No long-term commitments. Cancel or change plans anytime</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Billing FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">When will I be charged?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  You'll be charged immediately upon subscription and then on the same date each billing cycle.
                </p>
                
                <h4 className="font-semibold mb-2">Can I upgrade or downgrade?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, you can change your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  We accept all major credit cards, debit cards, and PayPal.
                </p>
                
                <h4 className="font-semibold mb-2">Is there a free trial?</h4>
                <p className="text-gray-600 text-sm">
                  We offer a 14-day free trial for all new users. No credit card required.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
