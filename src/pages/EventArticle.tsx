import React from 'react';
import { useParams } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Press Freedom Index 2024: Karnataka's Status",
    date: "March 15, 2024",
    category: "Press Freedom",
    content: `
      In a comprehensive analysis of press freedom across Indian states, Karnataka has shown significant 
      improvement in protecting journalists' rights and maintaining media independence. The annual Press 
      Freedom Index, released today, highlights several key developments in the state's media landscape.

      Key Findings:
      • 15% increase in independent media outlets
      • Stronger legal protections for journalists
      • Improved working conditions in newsrooms
      • Enhanced safety measures for field reporters

      However, challenges remain in areas such as digital surveillance and corporate influence in media. 
      KMJU continues to advocate for stronger press protections and journalist welfare.
    `
  },
  {
    id: 2,
    title: "New Media Policy Guidelines Announced",
    date: "March 12, 2024",
    category: "Policy",
    content: `
      The state government has announced new guidelines affecting digital media operations in Karnataka. 
      These guidelines aim to balance press freedom with responsible journalism in the digital age.

      Key Points:
      • Framework for digital news operations
      • Guidelines for social media journalism
      • Fact-checking protocols
      • Digital rights protection measures

      KMJU is currently reviewing these guidelines and will provide detailed analysis to its members.
    `
  },
  {
    id: 3,
    title: "KMJU Advocates for Journalists' Safety",
    date: "March 10, 2024",
    category: "Safety",
    content: `
      In response to recent incidents, KMJU has launched a comprehensive safety initiative for journalists 
      working in conflict zones and sensitive areas.

      The program includes:
      • Safety training workshops
      • Emergency response protocols
      • Legal aid services
      • Insurance coverage
      
      This initiative represents KMJU's commitment to protecting journalists while they perform their 
      crucial role in democracy.
    `
  }
];

export default function EventArticle() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="page-container">
        <div className="card">
          <h1 className="text-2xl font-bold text-[--primary] mb-4">Article Not Found</h1>
          <p className="text-gray-600">The requested article could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <article className="max-w-4xl mx-auto">
        <div className="card">
          <span className="inline-block px-3 py-1 bg-[--secondary] text-[--primary] text-sm font-semibold rounded mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl font-bold text-[--primary] mb-4">{article.title}</h1>
          <div className="text-gray-500 mb-6">{article.date}</div>
          <div className="prose max-w-none">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}