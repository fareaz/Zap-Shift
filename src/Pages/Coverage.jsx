import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);
    // console.log(serviceCenters);


    const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value;
       
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

        if (district) {
            const coord = [district.latitude, district.longitude];
          
            // go to the location
            mapRef.current.flyTo(coord, 14);
        }
    }

    return (
  <div className="bg-gray-50 min-h-screen py-10">
    <div className="max-w-11/12 mx-auto px-4">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-700">
          We are available in 64 districts
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl">
          Search your district and jump to the service center on the map.
        </p>
      </div>

      {/* Search area */}
      <div className="mb-5">
        <form onSubmit={handleSearch} className="flex items-center gap-3">
          <label className="flex items-center bg-white border border-gray-200 shadow-sm rounded-lg px-3 py-2 w-full md:w-96">
            <svg
              className="h-5 w-5 text-gray-400 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              className="grow text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              name="location"
              placeholder="Search district (e.g. Dhaka, Chattogram...)"
            />
          </label>

          <button
            type="submit"
            className="px-4 py-2 bg-emerald-700 text-white rounded-lg shadow hover:bg-emerald-600 transition text-sm"
          >
            Go
          </button>

          <button
            type="button"
            onClick={(e) => { e.preventDefault(); document.querySelector('input[name="location"]').value = ''; }}
            className="px-4 py-2 bg-white border border-gray-200 text-sm rounded-lg shadow-sm hover:bg-gray-50 transition"
          >
            Clear
          </button>
        </form>
      </div>

      {/* Map container */}
      <div className="rounded-xl w-full overflow-hidden border border-gray-100 shadow-md">
        <div className="px-4 py-3 bg-white border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Delivery coverage</div>
              <div className="text-xs text-gray-400">Click markers to view details</div>
            </div>
            <div className="text-sm text-gray-500">64 districts</div>
          </div>
        </div>

        <div className="h-[600px]">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-full w-full"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
              serviceCenters.map((center, index) => (
                <Marker
                  key={index}
                  position={[center.latitude, center.longitude]}
                >
                  <Popup>
                    <strong className="block text-sm text-gray-800">{center.district}</strong>
                    <span className="text-xs text-gray-600">Service Area: {center.covered_area.join(', ')}.</span>
                  </Popup>
                </Marker>
              ))
            }
          </MapContainer>
        </div>
      </div>
    </div>
  </div>
);
};

export default Coverage;