import React from "react";

const testimonials = [
  {
    company: "Lufthansa Cargo",
    text: "“Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”",
    author: "Frank Naeve",
    role: "Vice President Asia Pacific",
  },
  {
    company: "Sun Pharma",
    text: "“We highly regard Penta Freight's professionalism and knowledge in the freight field.  Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making thing possible. They have continued to innovate and change with the freight industry.... ”",
    author: "Makarand Sane",
    role: "GM Head - Export Logistics",
  },
  {
    company: "Watson Pharmaceuticals",
    text: "Penta Freight has been one of our export LSP’s for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success. ”",
    author: "John Smith",
    role: "Operations Director",
  },
  {
    company: "ABC Logistics",
    text: "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”",
    author: "David Lee",
    role: "Supply Chain Manager",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        
        <div className="sticky top-24 h-fit">
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-300 px-5 py-2">
            Reviews
          </div>

          <h2 className="text-5xl font-medium leading-tight">
            Hear From Our Satisfied
            <br />
            <span className="text-gray-400">
              Clients Worldwide.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-lg text-gray-600">
            Explore what industry leaders and long-term partners say about our
            commitment to excellence and innovation.
          </p>
        </div>

        
        <div className="space-y-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl
              ${index % 2 === 0 ? "mr-20" : "ml-20"}`}
            >
              <h3 className="mb-6 text-2xl font-semibold text-orange-500">
                {item.company}
              </h3>

              <p className="mb-8 leading-8 text-gray-600">
                "{item.text}"
              </p>

              <div>
                <h4 className="text-xl font-medium">{item.author}</h4>
                <p className="text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}