
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, DollarSign, PieChart, Plus, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data - replace with real data from your backend
  const portfolioValue = 125450.75;
  const totalGain = 8245.32;
  const gainPercentage = 7.02;
  const monthlyGoal = 2000;
  const currentMonth = 1750;

  const holdings = [
    { symbol: 'AAPL', name: 'Apple Inc.', value: 45000, change: 2.5, shares: 150 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', value: 32000, change: -1.2, shares: 25 },
    { symbol: 'TSLA', name: 'Tesla Inc.', value: 28000, change: 5.8, shares: 80 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', value: 20450.75, change: 1.8, shares: 60 }
  ];

  const recentTransactions = [
    { type: 'Buy', symbol: 'AAPL', amount: 5000, date: '2024-01-15' },
    { type: 'Sell', symbol: 'GOOGL', amount: 3200, date: '2024-01-14' },
    { type: 'Buy', symbol: 'TSLA', amount: 7500, date: '2024-01-12' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your portfolio overview.</p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                ${portfolioValue.toLocaleString()}
              </div>
              <div className={`flex items-center mt-2 text-sm ${gainPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {gainPercentage >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                +${totalGain.toLocaleString()} ({gainPercentage}%)
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Investment Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                ${currentMonth.toLocaleString()}
              </div>
              <Progress value={(currentMonth / monthlyGoal) * 100} className="mt-3" />
              <div className="text-sm text-gray-600 mt-2">
                ${monthlyGoal - currentMonth} left to reach goal
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Active Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{holdings.length}</div>
              <div className="text-sm text-gray-600 mt-2">Across multiple sectors</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/link-assets">
                <Button size="sm" className="w-full finlexa-gradient text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Link Assets
                </Button>
              </Link>
              <Link to="/virtual-assistant">
                <Button size="sm" variant="outline" className="w-full">
                  Get AI Advice
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Holdings and Transactions */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Holdings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Current Holdings
                <PieChart className="h-5 w-5 text-finlexa-blue" />
              </CardTitle>
              <CardDescription>Your current investment portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((holding) => (
                  <div key={holding.symbol} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">{holding.symbol}</div>
                      <div className="text-sm text-gray-600">{holding.shares} shares</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${holding.value.toLocaleString()}</div>
                      <div className={`text-sm ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {holding.change >= 0 ? '+' : ''}{holding.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Detailed Analysis
              </Button>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Transactions
                <DollarSign className="h-5 w-5 text-finlexa-blue" />
              </CardTitle>
              <CardDescription>Your latest trading activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">
                        {transaction.type} {transaction.symbol}
                      </div>
                      <div className="text-sm text-gray-600">{transaction.date}</div>
                    </div>
                    <div className={`font-semibold ${transaction.type === 'Buy' ? 'text-red-600' : 'text-green-600'}`}>
                      {transaction.type === 'Buy' ? '-' : '+'}${transaction.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
