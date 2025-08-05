import React from 'react';
import { Users, Code, Lightbulb, Wrench, Brain, Palette, Cpu, Rocket } from 'lucide-react';

const WhoWeWorkWith = () => {
  const collaborators = [
    { 
      icon: Code, 
      label: 'Engineers', 
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      description: 'Full-stack developers and AI engineers'
    },
    { 
      icon: Brain, 
      label: 'Researchers', 
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      description: 'AI researchers and data scientists'
    },
    { 
      icon: Palette, 
      label: 'Designers', 
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      description: 'UX/UI designers and creative minds'
    },
    { 
      icon: Rocket, 
      label: 'Builders', 
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100',
      description: 'Product builders and entrepreneurs'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Who We Work With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with brilliant minds that push the boundaries of what AI can be. Join our community of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {collaborators.map((collab, index) => {
            const IconComponent = collab.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`${collab.bgColor} ${collab.hoverColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 group-hover:scale-110 border border-white/50`}>
                  <div className="relative">
                    <div className={`w-20 h-20 mx-auto mb-6 ${collab.bgColor} rounded-full flex items-center justify-center group-hover:rotate-12 transition-all duration-500`}>
                      <IconComponent className={`w-10 h-10 ${collab.color} group-hover:scale-125 transition-all duration-300`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 mb-2">
                    {collab.label}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {collab.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Partner Logos Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Industry Leaders</h3>
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl max-w-5xl mx-auto border border-gray-100/50">
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {/* Placeholder logos - using geometric shapes */}
              <div className="group cursor-pointer">
                <div className="w-32 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold text-lg">TechCorp</span>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="w-32 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold text-lg">InnovateLab</span>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="w-32 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold text-lg">FutureAI</span>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="w-32 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold text-lg">NextGen</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;