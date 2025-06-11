import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col justify-between h-screen px-8 py-20">
      <div className="text-right text-sm font-medium">
        <p>When literature<br />meets cinema.</p>
      </div>

      <div className="text-center">
        <div className="flex justify-center items-center mb-4 space-x-2">
          <div className="w-10 h-5 rounded-full bg-gray-200 flex justify-around items-center px-2">
            {/* 움직이는 점들 */}
            <span className="w-1 h-1 bg-black rounded-full animate-bounce" />
            <span className="w-1 h-1 bg-black rounded-full animate-bounce delay-100" />
            <span className="w-1 h-1 bg-black rounded-full animate-bounce delay-200" />
          </div>
          <div className="text-xl">↓</div>
        </div>


      </div>
    </section>
  );
}
export default Hero;