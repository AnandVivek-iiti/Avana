import React from "react";
import head from "../Images/clubhead.png";

export default function Member() {
  // Example members list (you can replace names/images)
  const members = [
    { name: "Anurag Singh", role: "Club Head", img: head },
    { name: "Rohit Sharma", role: "Margdarshan Head", img: head },
    { name: "Priya Verma", role: "Margdarshan Head", img: head },
    { name: "Amit Kumar", role: "Margdarshan Head", img: head },
    { name: "Sneha Patel", role: "Margdarshan Head", img: head },
  ];

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-12">Member Area</h1>

      {/* Club Head Section */}
      <div className="flex flex-col items-center mb-16">
        <img
          src={members[0].img}
          alt={members[0].role}
          className="h-40 w-40 rounded-full object-cover shadow-2xl border-4 border-white"
        />
        <h2 className="text-3xl font-bold mt-4">{members[0].role}</h2>
        <p className="text-xl text-gray-200">{members[0].name}</p>
      </div>

      {/* Other Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {members.slice(1).map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 hover:scale-105 transform transition duration-300"
          >
            <img
              src={member.img}
              alt={member.role}
              className="h-28 w-28 rounded-full object-cover shadow-lg border-2 border-white"
            />
            <h3 className="text-2xl font-semibold mt-3">{member.role}</h3>
            <p className="text-lg text-gray-200">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
