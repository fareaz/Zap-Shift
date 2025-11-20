import React from "react";
import { use } from "react";
import serviceImg from '../assets/service.png'

const ServicesPromise = fetch("/services.json").then(res => res.json());

const Services = () => {
  const services = use(ServicesPromise);  // <-- Data directly from your service
  console.log(services);

  return (
    <section className="py-12 px-6 md:px-12 bg-[#022B3A] mx-3 rounded-xl">
      <div className="">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Services
          </h2>
          <p className="mt-3 text-slate-200 text-sm md:text-base max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services?.map((service, index) => {
            const featured = service.featured || index === 1; 
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 shadow-md border flex flex-col items-start
                transition-transform hover:-translate-y-1 
                ${featured
                    ? "bg-[#D8F99B] border-lime-300"
                    : "bg-white border-slate-200"
                }
                `}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center mb-4">
                  
                    <img src={serviceImg} alt={serviceImg} className="w-10 h-10 object-contain " />
                  
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
