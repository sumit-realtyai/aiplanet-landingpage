import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToWorkingOn = () => {
    const element = document.getElementById('working-on');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinMovement = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Crafting the Next Generation of
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Agentic AI</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                At AI Planet, we're not just building tools — we're designing AI agents that observe, reason, and act autonomously across voice, vision, and robotics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToWorkingOn}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                🚀 Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleJoinMovement}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                ✨ Join the Movement
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="w-full px-4 sm:px-0 flex justify-center">
            <div className="relative w-72 sm:w-96 h-72 sm:h-96">
              {/* Central Planet */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-2xl animate-float">
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                  <div className="absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">AI</div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full shadow-lg"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-400 rounded-full shadow-lg"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-lg"></div>
              </div>
              
              {/* Ring */}
              <div className="absolute inset-0 border-2 border-gray-200 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute inset-8 border border-gray-300 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;