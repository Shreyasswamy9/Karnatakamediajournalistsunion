import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="page-container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="section-title text-center text-4xl font-bold mb-12 text-[--primary-dark]">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[--primary] mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-[--primary]" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Press House, MG Road<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-[--primary]" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+91 (080) 1234-5678</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-[--primary]" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">contact@kmju.org</p>
                </div>
              </div>
              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[--primary]" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        {/* Google Map */}
        <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.196675168046!2d77.60185511415855!3d12.971598690855944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c0aae77d%3A0xf82a0b06c80c234a!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1687505789112!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
