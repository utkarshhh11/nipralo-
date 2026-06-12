import React from "react";


const cards = [
  {
    title: "Air Freight",
    description1 : "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
    description2:"Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
    description3:"",
    image: "https://tse4.mm.bing.net/th/id/OIP.ITUaE1_lDXCYsoXE5LqfcQHaHa?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    profit: "Speed Efficiency Reliability Affordability"
  },
  {
    title: "Sea Freight",
     description1 : "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.",
    description2:"With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.",
    description3 :"We provide flexible FCL scheduling and cost-efficient LCL options. On-demand pickup, drop-off, and warehousing help cut costs and transit time.",
    image: "https://www.xeneta.com/hubfs/ocean-freight-shipping.jpeg",
    profit: "Speed Efficiency Reliability Affordability"
  },
  {
    title: "Multi Modal Transport",
    description1 : "Every shipment is unique, so we offer multiple affordable transport options.",
    description2:"Along with air and sea freight, we provide multimodal transport via our global network.",
    description3:"Our tailored solutions enable real-time cargo tracking. We streamline your supply chain as your single point of contact.",
    image: "https://jenkar.com/wp-content/uploads/2024/07/multimodal-freight-forwarding-difference-jenkar-1536x1024.jpg",
    profit: "Speed Efficiency Reliability Affordability"
  },
];

export default function ScrollStack() {
  return (
    <section className="relative">
      {cards.map((card, index) => (
        <div
          key={index}
          className="sticky top-4 h-screen flex items-center justify-center"
        >
          <div className="w-[85%] h-[70vh] bg-white rounded-3xl shadow-2xl p-10">
            <div
              className={`flex items-center h-full gap-10 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
            >
              <div className="w-1/2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-112.5 object-cover rounded-2xl"
                />
              </div>

              <div className="w-1/2 flex-row justify-items-start pb-20">
                <h4 className="text-3xl mb-4 ">
                  {card.title}
                </h4>

                <p className=" text-gray-600 text-[17px]">
                  {card.description1}
                </p>
                <br />
                <p className=" text-gray-600 text-[17px]">
                  {card.description2}
                </p>
                <br />
                <p className=" text-gray-600 text-[17px]">
                  {card.description3}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {card.profit.split(" ").map((item, index) => (
                    <span
                      key={index}
                      className="px-8 py-2 bg-transparent border border-gray-300 rounded-full  "
                    >
                      {item}
                    </span>
                  ))}
                </div>
                  <button className='text-white h-9 w-35 text-20 font-bold rounded-xl bg-amber-600 mt-10'>Read More</button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}