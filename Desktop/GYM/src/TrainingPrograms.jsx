import React from 'react';

const TrainingPrograms = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Training Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Strength Training</h2>
          <p className="text-gray-600 mb-4">Build muscle and increase strength with our structured training sessions.</p>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">Join Now</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Cardio Blast</h2>
          <p className="text-gray-600 mb-4">Improve endurance with high-intensity cardio workouts.</p>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">Join Now</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Yoga & Flexibility</h2>
          <p className="text-gray-600 mb-4">Increase flexibility and reduce stress with our yoga classes.</p>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;