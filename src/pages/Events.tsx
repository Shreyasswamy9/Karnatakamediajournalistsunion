import React from 'react';
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: "Press Freedom Index 2024: Karnataka's Status",
    excerpt: "A comprehensive analysis of press freedom in Karnataka shows significant improvements in protecting journalists' rights and maintaining media independence...",
    date: "March 15, 2024",
    category: "Press Freedom"
  },
  {
    id: 2,
    title: "New Media Policy Guidelines Announced",
    excerpt: "Government announces new guidelines affecting digital media operations in Karnataka, aiming to balance press freedom with responsible journalism...",
    date: "March 12, 2024",
    category: "Policy"
  },
  {
    id: 3,
    title: "KMJU Advocates for Journalists' Safety",
    excerpt: "Recent initiatives to protect journalists in conflict zones and sensitive areas, including comprehensive safety programs and support services...",
    date: "March 10, 2024",
    category: "Safety"
  }
];

export default function Events() {
  return (
    <div className="page-container">
      <h1 className="section-title">Latest Events</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {news.map((item) => (
          <article key={item.id} className="card">
            <div className="h-48 bg-gray-200 mb-4 rounded"></div>
            <span className="inline-block px-3 py-1 bg-[--secondary] text-[--primary] text-sm font-semibold rounded mb-2">
              {item.category}
            </span>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{item.date}</span>
              <Link to={`/events/${item.id}`} className="text-[--primary] hover:text-[--primary-dark]">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>


{/* Keeping here to refer to later IF REQUIRED */}
      {/* <div className="mt-12">
        <h2 className="text-2xl font-bold text-[--primary] mb-6">Press Releases</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold mb-2">KMJU Statement on Digital Media Regulations</h3>
                  <p className="text-gray-600">Official statement regarding the proposed digital media regulations...</p>
                </div>
                <span className="text-sm text-gray-500">Mar {i + 5}, 2024</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}