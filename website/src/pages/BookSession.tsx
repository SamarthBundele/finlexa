
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Star, Video, Phone, MapPin } from 'lucide-react';

const BookSession = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('');

  const advisors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Financial Advisor, CFA",
      rating: 4.9,
      sessions: 1240,
      specialties: ["Portfolio Management", "Retirement Planning", "Tax Optimization"],
      hourlyRate: 200,
      avatar: "SJ",
      bio: "15+ years experience helping clients build and preserve wealth through strategic investment planning."
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Investment Strategist, CMT",
      rating: 4.8,
      sessions: 890,
      specialties: ["Technical Analysis", "Options Trading", "Risk Management"],
      hourlyRate: 180,
      avatar: "MC",
      bio: "Former hedge fund manager with expertise in advanced trading strategies and market analysis."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Personal Finance Expert, CFP",
      rating: 4.9,
      sessions: 1580,
      specialties: ["Budgeting", "Debt Management", "Emergency Planning"],
      hourlyRate: 150,
      avatar: "ER",
      bio: "Passionate about helping individuals achieve financial independence through practical money management."
    },
    {
      id: 4,
      name: "David Kim",
      title: "Crypto & Alternative Assets Specialist",
      rating: 4.7,
      sessions: 675,
      specialties: ["Cryptocurrency", "DeFi", "Alternative Investments"],
      hourlyRate: 220,
      avatar: "DK",
      bio: "Leading expert in digital assets and blockchain technology with deep market insights."
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const sessionTypes = [
    { value: "portfolio-review", label: "Portfolio Review", duration: "60 min", description: "Comprehensive analysis of your current investments" },
    { value: "financial-planning", label: "Financial Planning", duration: "90 min", description: "Create a roadmap for your financial goals" },
    { value: "investment-strategy", label: "Investment Strategy", duration: "45 min", description: "Develop personalized investment approach" },
    { value: "tax-planning", label: "Tax Planning", duration: "60 min", description: "Optimize your tax strategy and savings" },
    { value: "retirement-planning", label: "Retirement Planning", duration: "75 min", description: "Plan for a secure retirement future" },
    { value: "quick-consultation", label: "Quick Consultation", duration: "30 min", description: "Get answers to specific questions" }
  ];

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking logic
    console.log('Session booking submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a One-on-One Session</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized financial advice from our certified experts. Choose from portfolio reviews, 
            financial planning, investment strategies, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Advisor Selection */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-finlexa-blue" />
                  Choose Your Advisor
                </CardTitle>
                <CardDescription>
                  Select a financial expert based on your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {advisors.map((advisor) => (
                    <div
                      key={advisor.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        selectedAdvisor === advisor.id.toString()
                          ? 'border-finlexa-blue bg-finlexa-lightblue'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedAdvisor(advisor.id.toString())}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-finlexa-gradient text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                          {advisor.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{advisor.name}</h3>
                              <p className="text-gray-600">{advisor.title}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center mb-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="ml-1 font-semibold">{advisor.rating}</span>
                              </div>
                              <p className="text-sm text-gray-600">{advisor.sessions} sessions</p>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">{advisor.bio}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {advisor.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-lg font-semibold finlexa-text-gradient">
                            ${advisor.hourlyRate}/hour
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Session Type */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-finlexa-blue" />
                  Session Type
                </CardTitle>
                <CardDescription>
                  What would you like to focus on during your session?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {sessionTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        sessionType === type.value
                          ? 'border-finlexa-blue bg-finlexa-lightblue'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSessionType(type.value)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{type.label}</h3>
                        <Badge variant="outline">{type.duration}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Schedule Your Session</CardTitle>
                <CardDescription>
                  Complete your booking details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBookSession} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input type="date" id="date" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meetingType">Meeting Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">
                          <div className="flex items-center">
                            <Video className="h-4 w-4 mr-2" />
                            Video Call
                          </div>
                        </SelectItem>
                        <SelectItem value="phone">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            Phone Call
                          </div>
                        </SelectItem>
                        <SelectItem value="in-person">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            In-Person (NYC)
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topics">Topics to Discuss</Label>
                    <Textarea
                      id="topics"
                      placeholder="What specific areas would you like to focus on during your session?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Investment Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                        <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                        <SelectItem value="expert">Expert/Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span>Session Duration</span>
                        <span>60 minutes</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Advisor Rate</span>
                        <span>$200/hour</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between items-center font-semibold">
                          <span>Total</span>
                          <span className="finlexa-text-gradient">$200</span>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full finlexa-gradient text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
