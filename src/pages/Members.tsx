import React from 'react';
import { Users, Shield, Award } from 'lucide-react';

const executiveCommittee = [
  { title: "Honourable President", name: "Shivakumar Bellitatte", bio: "News editor, Vishwa Vani" },
  { title: "President", name: "ChandraShekar G", bio: "Editor, Sanje Express" },
  { title: "Vice President", name: "Mahendra B A", bio: "Editor, Sanje Samachar" },
  { title: "General Secretary", name: "Swamy Nakirekanti", bio: "Editor, Prajavahini" },
  { title: "Treasurer", name: "N Vidyasagar", bio: "Reporter, Sakshi" },
  { title: "Organising Secretary", name: "Malyadri", bio: "Reporter, Eenadu" },
  { title: "Secretary", name: "Vinutha", bio: "Reporter, Sanjevani" },
  { title: "State Executive Committee Member", name: "Prakash", bio: "Sub-editor, Vartha Bharathi" },
  { title: "State Executive Committee Member", name: "Prakash", bio: "Reporter, Zee Kannada" },
  { title: "State Executive Committee Member", name: "Ramesh", bio: "Reporter, EtvBharath" }
];

export default function Members() {
  return (
    <div className="page-container">
      {/* <h1 className="section-title">Our Leadership</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="card text-center">
          <Users className="w-12 h-12 text-[--primary] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">500+</h3>
          <p className="text-gray-600">Active Members</p>
        </div>
        <div className="card text-center">
          <Shield className="w-12 h-12 text-[--primary] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">20+</h3>
          <p className="text-gray-600">Years of Service</p>
        </div>
        <div className="card text-center">
          <Award className="w-12 h-12 text-[--primary] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">30+</h3>
          <p className="text-gray-600">Districts Covered</p>
        </div>
      </div> */}

      

      <h2 className="section-title">2024-25 Executive Committee</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {executiveCommittee.map((member, index) => (
          <div key={index} className="card">
            <h4 className="text-[--primary] font-bold mb-1">{member.title}</h4>
            <h3 className="text-xl font-bold text-[--primary] mb-1">{member.name}</h3>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
