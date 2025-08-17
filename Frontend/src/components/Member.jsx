// import React from "react";
import   Linkedin  from "../Images/Linkedin.png";
// import { useState, useEffect } from "react";
import Instagram  from "../Images/Instagram.png";
import head from "../Images/clubhead.png";

export default function Member() {
  const club = {
    clubHead: [
      {
        name: "Ananya Sharma",
        role: "President & Club Head",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        linkedin: "https://www.linkedin.com/in/ananya-sharma/",
        instagram: "https://www.instagram.com/ananya_sharma/",
        email: "ananya.sharma@example.com",
      },
    ],
  };

  return (
    <div>
      <h1>Member Area</h1>
        <div className="flex flex-col items-center">
            <img src={head} alt="Club Head" className="mx-auto h-24 w-24 rounded-full object-cover" />
            <h2 className="text-2xl font-bold mt-4">Club Head</h2>
            <p className="text-lg text-gray-600">Anurag Singh</p>
          </div>

          
        </div>

  );
}
