import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

/**
 * About Us Page - Colonial Heritage Elegance Design
 * 
 * This page provides information about the Yangon Heritage project and its mission.
 * Design follows the same color scheme and typography as the home page.
 */

export default function AboutUs() {
  const [location, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F1E8" }}>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b" style={{ borderColor: "#D4C4B0", backgroundColor: "#FEFDFB" }}>
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold" style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}>
            Yangon Heritage
          </h1>
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="flex items-center gap-2"
            style={{ color: "#C9A961" }}
          >
            <ArrowLeft size={18} />
            Back to Map
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}
        >
          About Yangon Heritage
        </h1>
        <div
          className="h-1 w-20 mb-8"
          style={{ backgroundColor: "#C9A961" }}
        />

        {/* Mission Section */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}
          >
            Our Mission
          </h2>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "#6B5344" }}
          >
            The Yangon Heritage project is dedicated to preserving and celebrating the rich cultural and architectural legacy of Yangon, Myanmar. Through interactive mapping and storytelling, we aim to connect visitors with the historical sites that have shaped the city's identity and character.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#6B5344" }}
          >
            Our platform showcases five significant heritage locations that represent the diverse influences—colonial architecture, religious traditions, and modern development—that define contemporary Yangon. Each site tells a unique story of the city's past and its evolution.
          </p>
        </section>

        {/* Heritage Sites Section */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}
          >
            Featured Heritage Sites
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                name: "Australian Embassy",
                desc: "A modern diplomatic mission representing Australia's presence in Myanmar.",
              },
              {
                name: "British Council Yangon",
                desc: "A historic center for English language education and cultural exchange since 1946.",
              },
              {
                name: "MPT Head Office",
                desc: "The headquarters of Myanmar's telecommunications infrastructure, with colonial-era roots.",
              },
              {
                name: "St. John the Baptist Armenian Church",
                desc: "Yangon's oldest church, built in 1863, representing the Armenian Christian community.",
              },
              {
                name: "Sule Shangri-La Hotel",
                desc: "A luxury hotel showcasing colonial aesthetic design with modern amenities.",
              },
              {
                name: "Central Telegraph Office",
                desc: "A historic telecommunications building connected to Myanmar's communication heritage.",
              },
            ].map((site, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "#FEFDFB",
                  borderLeft: "3px solid #C9A961",
                }}
              >
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}
                >
                  {site.name}
                </h3>
                <p style={{ color: "#8B7355" }}>
                  {site.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* StoryMap Section */}
        <section className="mb-12">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}
          >
            Explore the Interactive StoryMap
          </h2>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "#6B5344" }}
          >
            For a deeper dive into Yangon's heritage, we invite you to explore our interactive StoryMap. This comprehensive narrative journey takes you through each heritage site with detailed historical context, architectural significance, and cultural importance.
          </p>
          <a
            href="https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttnttaa-heritage/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              style={{
                backgroundColor: "#C9A961",
                color: "#FEFDFB",
              }}
              className="hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              View Full StoryMap
            </Button>
          </a>
        </section>

        {/* Contact Section */}
        <section>
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}
          >
            Get Involved
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#6B5344" }}
          >
            We believe that preserving heritage is a collective effort. If you have stories, photographs, or historical information about Yangon's heritage sites, we would love to hear from you. Your contributions help us build a more complete and vibrant record of the city's cultural legacy.
          </p>
        </section>
      </div>
    </div>
  );
}
