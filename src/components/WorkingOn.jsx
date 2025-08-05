import React from 'react';

const WorkingOn = () => {
  const domains = [
    {
      emoji: '🧠',
      title: 'Agentic AI Systems',
      description: "We design autonomous AI agents that don't just respond — they reason, decide, and take action. From voice to vision, our systems bridge perception and planning."
    },
    {
      emoji: '🗣',
      title: 'Voice & Conversational Interfaces',
      description: 'Real-time, emotionally-aware voice experiences that adapt to context and evolve with users — like having a smart companion that actually listens.'
    },
    {
      emoji: '🎬',
      title: 'AI Video Creation & Avatars',
      description: 'From raw inputs to ready-to-share videos — we combine avatars, speech, and editing automation to enable storytelling at scale.'
    },
    {
      emoji: '📊',
      title: 'Smart Deck & Content Generation',
      description: 'Turn your ideas into polished decks, reports, or narratives. Our AI accelerates business communication — from data to design in minutes.'
    },
    {
      emoji: '📖',
      title: 'Image-Based Storybooks',
      description: 'Blending generative art with adaptive storytelling — we\'re reinventing books into personalized, visual-first experiences.'
    },
    {
      emoji: '🤖',
      title: 'Robotics & Embodied AI',
      description: 'We explore how software agents can come alive in the physical world — powering prototypes that sense, think, and move with purpose.'
    }
  ];

  return (
    <section id="working-on" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We're Working On
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-glow mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge domains where we're pushing the boundaries of AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group animate-fade-in-up border border-gray-100/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {domain.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {domain.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {domain.description}
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingOn;