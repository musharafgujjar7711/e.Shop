import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About E-Shop</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to E-Shop, your one-stop destination for a seamless online shopping experience.
          We strive to provide a wide selection of high-quality products at competitive prices,
          ensuring customer satisfaction with every purchase. From fashion to electronics, home
          essentials to beauty products, our curated collection is designed to meet your everyday needs.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Built using React.js and styled with Tailwind CSS, our platform offers a fast, responsive,
          and user-friendly interface, making shopping convenient from any device. Our commitment to
          exceptional service and innovation drives us to continuously improve and adapt, creating
          an enjoyable experience tailored just for you.
        </p>
      </div>
    </div>
  );
}

export default About;
