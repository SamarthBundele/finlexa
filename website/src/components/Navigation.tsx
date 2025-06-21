
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BarChart3, 
  Bot, 
  BookOpen, 
  Calendar, 
  Users, 
  Phone, 
  CreditCard,
  LogIn,
  UserPlus
} from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/virtual-assistant', label: 'AI Assistant', icon: Bot },
    { path: '/courses', label: 'Courses', icon: BookOpen },
    { path: '/book-session', label: 'Book Session', icon: Calendar },
    { path: '/about', label: 'About Us', icon: Users },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="enhanced-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="flex items-center group">
            <img 
              src="/images/finlexa_logo_sq.png" 
              alt="Finlexa Logo" 
              className="h-8 transition-transform group-hover:scale-110 drop-shadow-lg"
            />
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'finlexa-gradient text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:shadow-md hover:transform hover:scale-105'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <Link to="/signin">
              <Button variant="ghost" className="flex items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="enhanced-button text-white flex items-center shadow-lg hover:shadow-xl transition-all duration-300">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
