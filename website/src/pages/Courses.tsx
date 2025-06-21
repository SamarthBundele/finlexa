
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Users, Star, Play, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Stock Market Fundamentals",
      description: "Learn the basics of stock market investing, from reading charts to fundamental analysis.",
      level: "Beginner",
      duration: "6 hours",
      students: 1240,
      rating: 4.8,
      price: 149,
      progress: 0,
      modules: 12,
      instructor: "Sarah Johnson, CFA"
    },
    {
      id: 2,
      title: "Advanced Trading Strategies",
      description: "Master sophisticated trading techniques including options, futures, and algorithmic trading.",
      level: "Advanced",
      duration: "12 hours",
      students: 856,
      rating: 4.9,
      price: 299,
      progress: 35,
      modules: 20,
      instructor: "Michael Chen, CMT"
    },
    {
      id: 3,
      title: "Personal Finance Mastery",
      description: "Complete guide to budgeting, saving, debt management, and building wealth.",
      level: "Beginner",
      duration: "8 hours",
      students: 2150,
      rating: 4.7,
      price: 99,
      progress: 100,
      modules: 15,
      instructor: "Emily Rodriguez, CFP"
    },
    {
      id: 4,
      title: "Cryptocurrency Trading",
      description: "Navigate the crypto markets with confidence. Learn technical analysis for digital assets.",
      level: "Intermediate",
      duration: "10 hours",
      students: 920,
      rating: 4.6,
      price: 199,
      progress: 0,
      modules: 18,
      instructor: "David Kim"
    },
    {
      id: 5,
      title: "Real Estate Investment",
      description: "Build wealth through real estate. Learn about REITs, rental properties, and market analysis.",
      level: "Intermediate",
      duration: "14 hours",
      students: 675,
      rating: 4.8,
      price: 249,
      progress: 0,
      modules: 22,
      instructor: "Lisa Thompson"
    },
    {
      id: 6,
      title: "Retirement Planning",
      description: "Secure your financial future with comprehensive retirement planning strategies.",
      level: "Beginner",
      duration: "5 hours",
      students: 1580,
      rating: 4.9,
      price: 79,
      progress: 0,
      modules: 10,
      instructor: "Robert Davis, CFP"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getButtonText = (progress: number) => {
    if (progress === 0) return 'Start Course';
    if (progress === 100) return 'Review Course';
    return 'Continue Learning';
  };

  const getButtonIcon = (progress: number) => {
    if (progress === 0) return <Play className="h-4 w-4" />;
    if (progress === 100) return <CheckCircle className="h-4 w-4" />;
    return <Play className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trading & Finance Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the markets with our expert-designed courses. From beginner basics to advanced strategies, 
            build the skills you need to succeed in trading and investing.
          </p>
        </div>

        {/* Course Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-8 w-8 text-finlexa-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{courses.length}</div>
              <p className="text-sm text-gray-600">Expert Courses</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-finlexa-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">8,421</div>
              <p className="text-sm text-gray-600">Active Students</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-finlexa-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-finlexa-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">55h</div>
              <p className="text-sm text-gray-600">Total Content</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p><strong>Instructor:</strong> {course.instructor}</p>
                    <p><strong>Modules:</strong> {course.modules}</p>
                  </div>

                  {course.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4">
                    <div className="text-2xl font-bold finlexa-text-gradient">
                      ${course.price}
                    </div>
                    <Button className="finlexa-gradient text-white">
                      {getButtonIcon(course.progress)}
                      <span className="ml-2">{getButtonText(course.progress)}</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path Section */}
        <div className="mt-16">
          <Card className="finlexa-gradient text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Structured Learning Path</CardTitle>
              <CardDescription className="text-white/80">
                Follow our recommended sequence for maximum learning efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Foundation</h3>
                  <p className="text-sm text-white/80">Start with Personal Finance Mastery and Stock Market Fundamentals</p>
                </div>
                <div>
                  <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Specialization</h3>
                  <p className="text-sm text-white/80">Choose your focus: Crypto, Real Estate, or Advanced Trading</p>
                </div>
                <div>
                  <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Mastery</h3>
                  <p className="text-sm text-white/80">Complete with Retirement Planning and advanced strategies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
