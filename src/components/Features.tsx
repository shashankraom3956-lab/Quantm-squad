import React from 'react';
import { Target, BarChart3, TrendingUp, Users, MessageSquare, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Financial Guidance',
      description: 'Receive tailored advice based on your unique financial situation, goals, and spending patterns through advanced AI analysis.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'AI-Generated Budget Summaries',
      description: 'Get comprehensive budget breakdowns and visualizations that help you understand where your money goes and how to optimize it.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Spending Insights & Suggestions',
      description: 'Discover patterns in your spending habits and receive intelligent suggestions to improve your financial health.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Demographic-Aware Communication',
      description: 'Experience conversations adapted to your demographic profile, ensuring culturally relevant and age-appropriate financial advice.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MessageSquare,
      title: 'Conversational NLP Experience',
      description: 'Engage in natural, human-like conversations about your finances using IBM Watson\'s advanced language processing.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered chatbot combines IBM's advanced technologies to deliver 
            personalized financial guidance that adapts to your unique needs.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`relative bg-gradient-to-r ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* IBM branding */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">IBM</span>
            </div>
            <span className="text-gray-700 font-medium">Powered by IBM Watson & Generative AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;