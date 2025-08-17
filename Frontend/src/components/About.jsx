// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Avana, a Sanskrit word meaning favour/protection, is a compassionate social
          welfare club dedicated to uplifting the lives of underprivileged individuals.
          Founded on the principles of empathy and solidarity, we strive to create a more
          equitable society where everyone has access to essential resources and
          opportunities for a better future.
        </p>
        <div className="w-20 h-1 bg-teal-700 mt-6 mx-auto rounded"></div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-10 md:grid-cols-3">
        {/* Goal */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-widest">GOAL</h3>
          <p className="text-gray-600 leading-relaxed">
            Our primary objective at Avana is to lower poverty and promote social justice
            by providing vital support and resources to those in need. Through various
            programs and initiatives, we aim to empower people to overcome
            socio-economic barriers and achieve self-sufficiency.
          </p>
        </div>

        {/* Principles */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-widest">PRINCIPLES</h3>
          <p className="text-gray-600 leading-relaxed">
            At the heart of Avana lies the belief that inner healing happens through social
            healing. We operate on the fundamental principle of inclusivity, recognising
            every individual's inherent dignity and worth regardless of their background
            or circumstances. We foster compassion, empathy, and respect, guided by
            equity, fairness, and social responsibility.
          </p>
        </div>

        {/* Main Events */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-widest">MAIN EVENTS</h3>
          <p className="text-gray-600 leading-relaxed">
            Through these concerted efforts, Avana endeavours to catalyse positive change
            and make a tangible difference in the lives of those we serve, striving towards
            a more compassionate, equitable, and inclusive society for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
