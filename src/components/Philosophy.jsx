import React from 'react';

const Philosophy = () => {
  const principles = [
    {
      title: 'Agents, not just models',
      description: 'We believe the future lies in autonomous AI that can adapt, reason, and interact — beyond just generating content.'
    },
    {
      title: 'Design for usefulness. Build for delight.',
      description: 'Our goal is to create AI that integrates seamlessly into lives and workflows — without complexity.'
    },
    {
      title: 'Prototype fast. Learn faster.',
      description: 'Every project is a learning loop — we build, test, and refine rapidly to stay ahead.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-blue-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-purple-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-1 bg-gradient-to-r from-blue-300 to-purple-300"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Our Philosophy
          </h2>
        </div>

        <div className="space-y-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-fade-in-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {principle.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
                  <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"></div>
                  <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-blue-300 to-purple-300 rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-white text-6xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;