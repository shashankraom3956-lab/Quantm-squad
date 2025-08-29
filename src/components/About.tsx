import React from 'react';
import { Heart, Shield, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Financial Empowerment',
      description: 'We believe everyone deserves access to intelligent financial guidance, regardless of their background or income level.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your financial data is protected with enterprise-grade security and IBM\'s trusted infrastructure.'
    },
    {
      icon: Globe,
      title: 'Inclusive Access',
      description: 'Our AI adapts to diverse demographics, ensuring relevant and culturally-aware financial advice for all users.'
    },
    {
      icon: Award,
      title: 'AI Excellence',
      description: 'Built on IBM\'s industry-leading AI technologies, delivering accurate and reliable financial insights.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To democratize access to intelligent financial guidance and improve financial literacy 
            through the power of IBM's generative AI, making personalized financial planning 
            accessible to everyone.
          </p>
        </div>

        {/* Mission statement */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 mb-16 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Bridging the Financial Literacy Gap with AI
          </h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Financial literacy affects millions of people worldwide. Our AI-powered chatbot leverages 
            IBM's cutting-edge generative AI to provide personalized, accessible, and culturally-aware 
            financial guidance that adapts to each user's unique circumstances and communication preferences.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="text-center group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 group-hover:scale-110 transform"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of users who are already benefiting from AI-powered financial guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105">
                Get Started Free
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;