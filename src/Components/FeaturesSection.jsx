import React from "react";
import img1 from "../assets/live-tracking.png";
import img2 from "react";
import img3 from "react";



const itemsData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    imgSrc: "img1"
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    imgSrc: {img2}
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    imgSrc: {img3}
  }
];

const FeaturesSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
      {itemsData.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white shadow rounded-xl p-5 border border-gray-100"
        >
          <img
            src={img1}
            alt={item.title}
            className="w-14 h-14 object-contain"
          />

          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection 
