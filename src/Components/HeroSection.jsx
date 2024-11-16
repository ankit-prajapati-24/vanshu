import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center">
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome to Your Special Website  </h1>
            <h1 className="text-5xl text-pink-500 font-bold mb-4">Vanshika jii 💘 </h1>
            <p className="text-lg mb-6">Made with ❤️, just for you.</p>
            {/* Love Quote */}
            <p className="text-xl italic text-pink-300">
              
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
