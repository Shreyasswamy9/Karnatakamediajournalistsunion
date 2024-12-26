import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const newsArticles = [
  {
    id: 1,
    title: "GIMA Awards 2024",
    imageUrl: "/path/to/image1.jpg", // Replace with actual image URL
    link: "/news/1"
  },
  {
    id: 2,
    title: "KFF Tournament 2024",
    imageUrl: "/path/to/image2.jpg", // Replace with actual image URL
    link: "/news/2"
  },
  
];

const upcomingEvents = [
  {
    id: 1,
    title: "KMJU Annual Meet 2024",
    date: "March 20, 2024",
    description: "Annual gathering of KMJU members to discuss upcoming events and initiatives.",
    link: "/events/1"
  },
  {
    id: 2,
    title: "Journalism Workshop",
    date: "March 25, 2024",
    description: "Interactive workshop on investigative journalism and reporting ethics.",
    link: "/events/2"
  },
];

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Automatic cycling for marquee
  useEffect(() => {
    if (newsArticles.length > 3) {
      const interval = setInterval(() => {
        setScrollPosition((prev) => (prev + 1) % newsArticles.length);
      }, 5000); // 5 seconds interval
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <main>
      <Hero />

      {/* Latest News Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Latest News</h2>
        <div
          className={`grid gap-8 ${
            newsArticles.length <= 2 ? "md:grid-cols-1 lg:grid-cols-2" : ""
          }`}
          style={{
            overflowX: newsArticles.length > 3 ? "hidden" : "visible",
            display: newsArticles.length > 3 ? "flex" : "grid",
            transform:
              newsArticles.length > 3
                ? `translateX(-${scrollPosition * 100}%)`
                : "none",
            transition: "transform 0.5s ease",
          }}
        >
          {newsArticles.map(({ id, title, imageUrl, link }, index) => (
            <div
              key={id}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 ${
                newsArticles.length <= 2
                  ? "flex-1"
                  : "w-full sm:w-1/3 md:w-1/4"
              }`}
            >
              <div
                className="h-48 bg-gray-200"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <Link to={link} className="text-[--primary] hover:text-[--primary-dark]">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="section-title">Upcoming Events</h2>
  <div
    className={`grid gap-8 ${
      upcomingEvents.length <= 2 ? "md:grid-cols-1 lg:grid-cols-2" : ""
    }`}
    style={{
      overflowX: upcomingEvents.length > 3 ? "hidden" : "visible",
      display: upcomingEvents.length > 3 ? "flex" : "grid",
      transform:
        upcomingEvents.length > 3
          ? `translateX(-${eventsScrollPosition * 100}%)`
          : "none",
      transition: "transform 0.5s ease",
    }}
  >
    {upcomingEvents.map(({ id, title, date, description, link }) => (
      <div
        key={id}
        className={`bg-white rounded-lg shadow-md p-6 flex gap-4 hover:shadow-xl transition-shadow duration-200 ${
          upcomingEvents.length <= 2 ? "flex-1" : "w-full sm:w-1/3 md:w-1/4"
        }`}
      >
        <div className="w-24 h-24 bg-gradient-to-br from-[--primary] to-[--accent] rounded-lg flex flex-col items-center justify-center text-white">
          <span className="text-2xl font-bold">{date.split(" ")[0]}</span>
          <span>{date.split(" ")[1]}</span>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          <Link to={link} className="text-[--primary] hover:text-[--primary-dark]">
            Contact for Details →
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gradient-to-br from-[--primary] to-[--accent] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About KMJU</h3>
              <p className="text-sm text-[--secondary]">
                Dedicated to protecting and promoting the interests of
                journalists in Karnataka.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/members" className="hover:text-[--secondary]">
                    Members
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-[--secondary]">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[--secondary]">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-[--secondary]">
                <li>Email: contact@kmju.org</li>
                <li>Phone: +91 (080) 1234-5678</li>
                <li>Bangalore, Karnataka</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social media icons will be added here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[--secondary]/30 text-center text-sm text-[--secondary]">
            <p>© 2024 Karnataka Media and Journalists Union. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
