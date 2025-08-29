import React from 'react';
import { Database, Brain, MessageCircle, TrendingUp, ArrowDown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: 'Connect Your Data',
      description: 'Securely link your financial accounts and provide basic demographic information for personalized insights.',
      step: '01'
    },
    {
      icon: Brain,
      title: 'IBM AI Analysis',
      description: 'Our Watson-powered AI analyzes your spending patterns, financial goals, and demographic profile.',
      step: '02'
    },
    {
      icon: MessageCircle,
      title: 'Natural Conversation',
      description: 'Chat naturally with our NLP-powered assistant about your finances in your preferred communication style.',
      step: '03'
    },
    {
      icon: TrendingUp,
      title: 'Actionable Insights',
      description: 'Receive personalized recommendations, budget summaries, and strategic financial guidance.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process leverages IBM's advanced AI technologies to provide 
            you with intelligent financial guidance in four simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-teal-600 h-full rounded-full"></div>

          {steps.map((step, index) => (
            <div key={step.step} className="relative mb-16 last:mb-0">
              {/* Step number circle */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-16' : 'lg:mr-auto lg:pr-16'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  {/* Mobile step number */}
                  <div className="lg:hidden flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600"></div>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mr-4">
                      <step.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-3">{index + 1}/{steps.length}</span>
                  </div>
                </div>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8">
                  <ArrowDown className="w-6 h-6 text-blue-600 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Integration showcase */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Powered by IBM's Advanced AI Technologies
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our solution integrates multiple IBM services to deliver comprehensive financial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">IBM</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Watson Assistant</h4>
              <p className="text-gray-600 text-sm">Natural language processing for human-like conversations</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Generative AI</h4>
              <p className="text-gray-600 text-sm">Advanced AI models for personalized financial insights</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Watson Discovery</h4>
              <p className="text-gray-600 text-sm">Intelligent data analysis and pattern recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;