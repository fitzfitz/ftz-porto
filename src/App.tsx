import web1 from "@/assets/porto-images/web-williamsmachin-com-au.jpg";
import web2 from "@/assets/porto-images/web-aslander-com-au.jpg";
import web3 from "@/assets/porto-images/web-drysdales-com-au.jpg";
import web4 from "@/assets/porto-images/web-hartestateagents-com-au.jpg";
import web5 from "@/assets/porto-images/web-justpropertymanagement-com-au.jpg";
import web6 from "@/assets/porto-images/web-northshoreholidayrentals-com-au.jpg";
import web7 from "@/assets/porto-images/web-mitchellsrealty-com-au.jpg";
import web8 from "@/assets/porto-images/web-agapesoftware-co-id.jpg";
import web9 from "@/assets/porto-images/web-genesys-web-profile.jpg";
import web10 from "@/assets/porto-images/web-levinabastian-com.jpg";
import web11 from "@/assets/porto-images/web-genesys-accounting.jpg";
import web12 from "@/assets/porto-images/web-genesys-dealer-admin-honda.jpg";
import web13 from "@/assets/porto-images/web-genesys-payroll.jpg";
import web14 from "@/assets/porto-images/web-genesys-smartdealer-admin.jpg";
import web15 from "@/assets/porto-images/web-smartdealer-catalogue.jpg";
import web16 from "@/assets/porto-images/web-pesona-mozaik.jpg";
import web17 from "@/assets/porto-images/web-retail-in-io.png";
import web18 from "@/assets/porto-images/web-bluebird-logistic.jpg";
import web19 from "@/assets/porto-images/web-bluebird-system.jpg";
import web20 from "@/assets/porto-images/web-ericsson-market-place-admin.jpg";
import web21 from "@/assets/porto-images/web-police-patrol.jpg";
import web22 from "@/assets/porto-images/mobile-coffee-place.jpg";
// import web21 from "@/assets/porto-images/";
// import web21 from "@/assets/porto-images/";

import { DirectionAwareHover } from "./components/ui/direction-aware-hover";

const portofolios = [
  {
    id: 1,
    image: web1,
    year: 2015,
    title: "Web Property Management (Agentpoint Au)",
    description: "",
    tools: ["Wordpress", "jQuery"],
  },
  {
    id: 2,
    image: web2,
    year: 2015,
    title: "Web Property Management (Agentpoint Au)",
    description: "",
    tools: ["Wordpress", "jQuery"],
  },
  {
    id: 3,
    image: web3,
    year: 2015,
    title: "Web Property Management (Agentpoint Au)",
    description: "",
    tools: ["Wordpress", "jQuery"],
  },
  {
    id: 4,
    image: web4,
    year: 2015,
    title: "Web Property Management (Agentpoint Au)",
    description: "",
    tools: ["Wordpress", "jQuery"],
  },
  {
    id: 5,
    image: web5,
    year: 2015,
    title: "Web Property Management (Agentpoint Au)",
    description: "",
    tools: ["Wordpress", "jQuery"],
  },
  {
    id: 6,
    image: web6,
    year: 2015,
    title: "Web Property Management (Agentpoint Au)",
    description: "",
    tools: ["Wordpress", "jQuery"],
  },
  {
    id: 7,
    image: web7,
    year: 2015,
    title: "Web Property Management (Agentpoint Au)",
    description: "",
    tools: ["Wordpress", "jQuery"],
  },
  {
    id: 8,
    image: web8,
    year: 2017,
    title: "Company Profile",
    description: "",
    tools: ["Angular.js"],
  },
  {
    id: 9,
    image: web9,
    year: 2018,
    title: "Company Profile",
    description: "",
    tools: ["React.js"],
  },
  {
    id: 10,
    image: web10,
    year: 2018,
    title: "Personal Web Profile",
    description: "",
    tools: ["React.js"],
  },
  {
    id: 11,
    image: web11,
    year: 2018,
    title: "Accounting System",
    description: "",
    tools: ["Ext.js", "Laravel"],
  },
  {
    id: 12,
    image: web12,
    year: 2017,
    title: "Stock and Management System",
    description: "",
    tools: ["jQuery", "Laravel"],
  },
  {
    id: 13,
    image: web13,
    year: 2019,
    title: "Payrol Management System",
    description: "",
    tools: ["Ext.js"],
  },
  {
    id: 14,
    image: web14,
    year: 2019,
    title: "Sales & Stock Management",
    description: "",
    tools: ["Ext.js"],
  },
  {
    id: 15,
    image: web15,
    year: 2018,
    title: "SmartDealer",
    description: "",
    tools: ["React.js", "Redux Thunk"],
  },
  {
    id: 16,
    image: web16,
    year: 2019,
    title: "Company Profile",
    description: "",
    tools: ["React.js", "Redux Thunk"],
  },
  {
    id: 17,
    image: web17,
    year: 2024,
    title: "Retail-In Ecommerce",
    description: "",
    tools: ["React.js/Vite", "Typescript", "Tanstack Query", "Zustand"],
  },
  {
    id: 18,
    image: web18,
    year: 2020,
    title: "Bluebird Logistics Management",
    description: "",
    tools: [
      "React.js",
      "Redux Saga",
      "Typescript",
      "OpenStreetMap",
      "Javascript's SSE",
    ],
  },
  {
    id: 19,
    image: web19,
    year: 2020,
    title: "Bluebird Taxi Management",
    description: "",
    tools: [
      "React.js",
      "Redux Thunk",
      "Typescript",
      "OpenStreetMap",
      "Javascript's SSE",
    ],
  },
  {
    id: 20,
    image: web20,
    year: 2020,
    title: "Ericsson Market Place",
    description: "",
    tools: ["Next.js", "Typescript", "Redux Thunk"],
  },
  {
    id: 21,
    image: web21,
    year: 2024,
    title: "Police Patrol",
    description: "",
    tools: [
      "Next.js",
      "Typescript & Zod",
      "Tanstack Query",
      "Google Maps API (Places, Directions, Map)",
      "Keycloak",
      "Socket.io",
    ],
  },
  {
    id: 21,
    image: web22,
    year: 2024,
    title: "Marketplace - Coffee Shops",
    description: "",
    tools: [
      "React Native",
      "Typescript & Zod",
      "Tanstack Query",
      "Google Maps API (Places, Map)",
      "Appwrite (Backend)",
    ],
  },
];

const getYears = (data: typeof portofolios) => {
  const uniqueYears = new Set(data.map((item) => item.year));
  return [...uniqueYears].sort((a, b) => b - a);
};

function App() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="py-10">
        <h3 className="mb-8 py-1 text-3xl dark:text-white">Portofolio</h3>
        <div className="flex flex-col gap-8">
          {getYears(portofolios).map((year) => (
            <div key={year} className="flex flex-col gap-4">
              <span className="text-xl font-bold">{year}</span>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {portofolios
                  .filter((item) => item.year === year)
                  .map((porto) => (
                    <DirectionAwareHover
                      key={porto.id}
                      imageUrl={porto.image}
                      className="aspect-square h-full w-full md:h-full md:w-full"
                      childrenClassName="pr-5 flex space-y-2 flex-col"
                    >
                      <p className="text-lg font-bold">
                        {porto.title} {porto.year}
                      </p>
                      <ol className="ms-5 list-disc">
                        {porto.tools.map((tool) => (
                          <li key={tool} className="text-sm font-normal">
                            {tool}
                          </li>
                        ))}
                      </ol>
                    </DirectionAwareHover>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
