"use client";

import { Section } from "./Section";
import { PERSONAL_INFO } from "@/data/portfolio";
import { EmailIcon, PhoneIcon, LocationIcon, LinkedInIcon } from "./icons";
import { useState } from "react";

export default function AboutMe() {
  const [imageError, setImageError] = useState(false);

  return (
    <Section title="About Me" variant="hero">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Image/Avatar */}
        <div className="relative lg:-mt-18">
          <div className="w-40 h-40 rounded-full border-4 border-white/50 overflow-hidden shadow-2xl">
            {!imageError ? (
              <img
                src="/assets/saepul-profile.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ">
                <span className="text-6xl font-bold text-white">
                  {PERSONAL_INFO.name.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
        </div>

        {/* Personal Information */}
        <div className="flex-1 text-center lg:text-left mb-6">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 pb-4">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-xl text-gray-700 font-semibold mb-4">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mb-6">
            {PERSONAL_INFO.about}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <ContactBadge
              icon={<EmailIcon />}
              label="Email"
              href={`mailto:${PERSONAL_INFO.email}`}
              color="blue"
            />
            <ContactBadge
              icon={<PhoneIcon />}
              label="Phone"
              href={`tel:${PERSONAL_INFO.phone}`}
              color="green"
            />
            <ContactBadge
              icon={<LocationIcon />}
              label={PERSONAL_INFO.location}
              href="#"
              color="purple"
            />
            <ContactBadge
              icon={<LinkedInIcon />}
              label="LinkedIn"
              href={`https://${PERSONAL_INFO.linkedin}`}
              color="indigo"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

// Component untuk Contact Badge
interface ContactBadgeProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: 'blue' | 'green' | 'purple' | 'indigo';
}

function ContactBadge({ icon, label, href, color }: ContactBadgeProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
    green: "bg-green-50 border-green-200 text-green-700 hover:bg-green-100",
    purple: "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100"
  };

  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-200 ${colorClasses[color]}`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

