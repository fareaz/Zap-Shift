import React, { useState } from "react";


const AboutUs = () => {
  const [active, setActive] = useState("story");

  const tabs = [
    { id: "story", label: "Story" },
    { id: "mission", label: "Mission" },
    { id: "success", label: "Success" },
    { id: "team", label: "Team & Others" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 flex items-start justify-center">
      <div className="w-full  bg-white rounded-2xl shadow-md border border-gray-100">
        <div className="p-8 md:p-12">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-800">About Us</h1>
          <p className="mt-3 text-sm md:text-base text-gray-500 max-w-2xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
            business shipments — we deliver on time, every time.
          </p>

          <div className="mt-6 border-t border-gray-100 pt-6">
            {/* Tabs */}
            <nav className="flex gap-6 text-sm md:text-base">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`py-2 focus:outline-none border-b-2 border-transparent ${
                    active === t.id
                      ? "text-amber-700 border-amber-700 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </nav>

            {/* Content area */}
            <div className="mt-6">
              <div className="text-gray-700 text-sm md:text-base leading-7 space-y-4">
                {active === "story" && (
                  <>
                    <p>
                      We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the
                      years, our commitment to real-time tracking, efficient logistics, and customer-first service has made
                      us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery,
                      we ensure it reaches its destination — on time, every time.
                    </p>
                    <p>
                      Our team is built from logistics professionals who obsess about timelines and the customer
                      experience. Every parcel is tracked end-to-end and handled with care. We continuously iterate on our
                      processes to reduce delays and improve transparency for senders and receivers alike.
                    </p>
                    <p>
                      Today, we serve thousands of cities and businesses with a network that balances speed and value. Our
                      promise remains the same: reliable delivery, clear communication, and a simple experience for all.
                    </p>
                  </>
                )}

                {active === "mission" && (
                  <>
                    <p>
                      Our mission is to remove friction from sending and receiving goods. We aim to provide reliable,
                      transparent, and fast delivery for every parcel — regardless of size or destination.
                    </p>
                    <p>
                      We focus on sustainability, accuracy, and continuous improvement. That means smarter routes, reduced
                      emissions per parcel, and technologies that give customers real-time clarity about their shipment's
                      progress.
                    </p>
                  </>
                )}

                {active === "success" && (
                  <>
                    <p>
                      Success for us is measured by on-time delivery rates, customer satisfaction, and the number of
                      businesses that trust us with their logistics. We celebrate when a tight deadline is met and when a
                      customer receives a parcel exactly when they need it.
                    </p>
                    <p>
                      Our growth has been driven by word-of-mouth, partnerships, and an obsessive focus on operations.
                      These pillars helped us scale while keeping service quality high.
                    </p>
                  </>
                )}

                {active === "team" && (
                  <>
                    <p>
                      Our team combines operators, engineers, and customer-support professionals. We hire people who care
                      about getting the small things right — because small things compound into a great customer
                      experience.
                    </p>
                    <p>
                      We also partner with local businesses and drivers to extend our reach and deliver a consistent,
                      friendly service in every community we serve.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* subtle footer space to match design */}
        <div className="h-6 md:h-8" />
      </div>
    </div>
  );
}
export default  AboutUs
