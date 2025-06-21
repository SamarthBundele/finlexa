
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Mic, MicOff, Send, Volume2, VolumeX, Sparkles } from 'lucide-react';

const VirtualAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm Alex, your personal finance AI assistant. I can help you with investment advice, budget planning, portfolio analysis, and answer any finance-related questions. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const quickActions = [
    "Analyze my portfolio performance",
    "Suggest investment opportunities",
    "Help with budget planning",
    "Explain market trends",
    "Review my financial goals",
    "Calculate retirement savings"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: conversation.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setConversation([...conversation, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: conversation.length + 2,
        type: 'assistant',
        content: generateAIResponse(message),
        timestamp: new Date().toLocaleTimeString()
      };
      setConversation(prev => [...prev, aiResponse]);
    }, 1500);

    setMessage('');
  };

  const generateAIResponse = (userMessage: string) => {
    // Simple response simulation - replace with actual AI integration
    if (userMessage.toLowerCase().includes('portfolio')) {
      return "Based on your current portfolio, I can see you have a well-diversified mix of stocks. Your tech holdings are performing well with a 7% gain this month. Consider rebalancing to include some defensive stocks given the current market volatility.";
    } else if (userMessage.toLowerCase().includes('budget')) {
      return "For effective budgeting, I recommend the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment. Based on your income, you could save an additional $500 monthly by optimizing your discretionary spending.";
    } else {
      return "That's a great question! I'm here to help you make informed financial decisions. Could you provide more specific details about what you'd like to know?";
    }
  };

  const handleQuickAction = (action: string) => {
    setMessage(action);
    handleSendMessage();
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // TODO: Implement speech recognition
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    // TODO: Implement text-to-speech
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-finlexa-gradient rounded-full p-4 mr-4">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Alex - AI Assistant</h1>
              <p className="text-gray-600">Your personal finance advisor, available 24/7</p>
            </div>
          </div>
          <Badge className="finlexa-gradient text-white">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Financial Guidance
          </Badge>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Chat with Alex</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleSpeaking}
                      className={isSpeaking ? 'bg-finlexa-blue text-white' : ''}
                    >
                      {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleListening}
                      className={isListening ? 'bg-red-500 text-white' : ''}
                    >
                      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {conversation.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-finlexa-blue text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p>{msg.content}</p>
                        <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything about your finances..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="finlexa-gradient text-white">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Features */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
                <CardDescription>Get instant help with common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start"
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-finlexa-blue" />
                  <span className="text-sm">Portfolio Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mic className="h-4 w-4 text-finlexa-blue" />
                  <span className="text-sm">Voice Commands</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4 text-finlexa-blue" />
                  <span className="text-sm">Audio Responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-finlexa-blue" />
                  <span className="text-sm">Smart Insights</span>
                </div>
              </CardContent>
            </Card>

            {/* Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Voice Recognition</span>
                    <Badge variant={isListening ? "default" : "secondary"}>
                      {isListening ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Text-to-Speech</span>
                    <Badge variant={isSpeaking ? "default" : "secondary"}>
                      {isSpeaking ? "On" : "Off"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
