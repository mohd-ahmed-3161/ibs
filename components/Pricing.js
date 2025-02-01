import { useState, useRef } from "react";

const goalsData = {
  2022: ["Assets Valuation of Turbo Machinery Services"],
  2023: [
    "Store Inventory Fazal Super Market",
    "Implement HR SOP’s Module, Crescent Enterprises",
    "Fixed Assets Tagging of Healthx Pakistan",
    "Warehouse Store Shifting of Turbo Machinery Services",
  ],
  2024: [
    "Transfer of Business Capital, Crescent Enterprises to Crestline (SMC-Pvt) Ltd",
    "ERP Implementation, Turbo Machinery Services",
    "Business Process Review (BPR) of Crestline (SMC-Pvt) Ltd",
  ],
  2025: [
    "Coming soon!!!"
  ]
};

const Feature = ({ featureText }) => {
  return (
    <li className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 w-4 h-4 mt-1.5 mr-2 text-gray-700 md:h-4 md:w-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div>{featureText}</div>
    </li>
  );
};

export default function Pricing() {
  const [openYear, setOpenYear] = useState(null);
  const contentRefs = useRef({});

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <section
      id="pricing"
      className="py-20 md:pb-32 bg-gradient-to-t from-sky-300 to-sky-100"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        {/* "Our Numbers" Section */}
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 md:mb-28">
          <div className="max-w-3xl mx-auto md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-black rounded-lg bg-[#bbd0dd] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40 mb-4">
              Why Choose Us?
            </div>
            <h2 className="mt-8 text-3xl font-semibold text-gray-800 md:text-5xl">
              Our Numbers
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:mt-0 xl:grid-cols-3">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  5+
                </h4>
              </div>
              <hr className="border-t border-gray-300" />
              <h5 className="text-xl font-semibold text-center text-gray-800">
                Years of proven financial expertise
              </h5>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  100+
                </h4>
              </div>
              <hr className="border-t border-gray-300" />
              <h5 className="text-xl font-semibold text-center text-gray-800">
                Satisfied customers served
              </h5>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  20+
                </h4>
              </div>
              <hr className="border-t border-gray-300" />
              <h5 className="text-xl font-semibold text-center text-gray-800">
                Financial specialists at your service
              </h5>
            </div>
          </div>
        </div>

        {/* "Our Goals" Section */}
        <div className="max-w-3xl mx-auto md:text-center">
          <h2 className="mb-5 mt-28 text-3xl font-semibold text-gray-800 md:text-5xl">
            Our Goals
          </h2>
        </div>
        <div className="mt-10 max-w-xl mx-auto">
          {Object.entries(goalsData).map(([year, goals]) => (
            <div key={year} className="mb-4">
              {/* Accordion Header */}
              <button
                onClick={() => toggleYear(year)}
                className="flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-gray-800 bg-white shadow-md rounded-md focus:outline-none"
              >
                <span>{year}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transition-transform ${
                    openYear === year ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Accordion Content */}
              <div
                ref={(el) => (contentRefs.current[year] = el)}
                className={`overflow-hidden transition-all duration-300 ${
                  openYear === year ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="mt-2 space-y-2 bg-gray-100 rounded-md p-4">
                  {goals.map((goal, index) => (
                    <Feature key={index} featureText={goal} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
