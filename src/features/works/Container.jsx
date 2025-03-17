import { useEffect, useState } from "react";
import WorkCard from "./WorkCard";

const WorksContainer = () => {
  const [totalMonths, setTotalMonths] = useState(0);

  const data = [
    {
      position: "CMS Web Developer/Business planning officer",
      companyName: "Chung & Associates",
      duration: "Feb 2024 - Present",
      location: "Vancouver, 🇨🇦",
      details: [
        "Developed and maintained responsive websites for 7 startup businesses, ensuring user experience and SEO.",
        "Reviewed 50+ business models, and conducted business plan evaluations and research to support clients’ completion of the startup incubation process.",
      ],
      tags: ["Wordpress", "Wix", "Squarespace"],
      color: "bg-emerald-600",
      startDate: new Date(2024, 1),
      endDate: new Date(),
    },
    {
      position: "Software Engineer",
      companyName: "emCT",
      duration: "Oct 2021 - Dec 2023",
      location: "Seoul, 🇰🇷",
      details: [
        "Led the launch of a B2B parking control service, focusing on system design, project management, and development, resulting in additional monthly revenue for clients and recurring subscription income for the company.",
        "Built a hybrid web app using a native-JS bridge and designed RESTful APIs to enable simultaneous web and mobile development with faster releases.",
        "Mentored junior developers through pair-programming, providing dev support, and advising on company policies.",
      ],
      tags: ["React", "TS/JS", "MAUI"],
      color: "bg-emerald-500",
      startDate: new Date(2021, 9),
      endDate: new Date(2023, 11),
    },
    {
      position: "Software Engineer",
      companyName: "Nilson",
      duration: "Mar 2021 - Sep 2021",
      location: "Seoul, 🇰🇷",
      details: [
        "Developed 5+ React-based websites showcasing company profiles and products, achieving 90+ SEO and accessibility scores on Google Lighthouse for optimized user experience.",
        "Applied a front-end design system using Storybook and Figma to ensure brand consistency and code reusability, building reusable UI components with React.js and implementing atomic design for efficient collaboration.",
        "Introduced React.js, code formatter, Notion, Agile methodology to streamline sprint and enhance team efficiency.",
      ],
      tags: ["MAUI", "TS/JS", "ASP.NET"],
      color: "bg-emerald-400",
      startDate: new Date(2021, 2),
      endDate: new Date(2021, 8),
    },
    {
      position: "Software Engineer",
      companyName: "Monitoring6",
      duration: "Jun 2019 - Mar 2021",
      location: "Seoul, 🇰🇷",
      details: [
        "Enhanced an Android app for a real-time IoT fire alarm platform, adding features and optimizing performance while handling 10x user increase and 99% delivery rate for safety notifications.",
        "Led the development and launch of the company’s first iOS app, ensuring compatibility with the Android app while integrating platform-specific functionality and expanded the company's reach to iOS users.",
        "Designed and implemented a responsive in-house back-office system using SSR, enabling one-click operations for tasks previously handled manually.            ",
      ],
      tags: ["ASP.NET", "Android/iOS", "C#"],
      color: "bg-emerald-300",
      startDate: new Date(2019, 5),
      endDate: new Date(2021, 2),
    },
    {
      position: "CMS Web Developer / Operating Intern",
      companyName: "igniteXL Ventures",
      duration: "Oct 2018 - Feb 2019",
      location: "Sunnyvale, 🇺🇸",
      details: [
        "Customized the page with HTML/CSS, improved site speed by 50% by optimizing images, plugins, and automation.",
        "Office/Event Coordinator for accelerating events and digital marketing via Blog and YouTube.",
        "Adjusting pitch decks, Operation/Language services Staff on related pitch events.",
      ],
      tags: ["Wordpress", "Bluehost", "HTML/CSS"],
      color: "bg-emerald-200",
      startDate: new Date(2018, 9),
      endDate: new Date(2019, 1),
    },
    {
      position: "Bachelor of Science in Computer Engineering",
      companyName: "Pusan National University",
      duration: "Mar 2014 - Feb 2019",
      location: "Busan, 🇰🇷",
      color: "bg-emerald-100",
      startDate: new Date(2014, 2),
      endDate: new Date(2019, 1),
    },
  ];

  useEffect(() => {
    const earliestDate = new Date(
      Math.min(...data.map((item) => item.startDate.getTime())),
    );
    const latestDate = new Date(
      Math.max(...data.map((item) => item.endDate.getTime())),
    );

    const months =
      (latestDate.getFullYear() - earliestDate.getFullYear()) * 12 +
      (latestDate.getMonth() - earliestDate.getMonth());

    setTotalMonths(months);
  }, []);

  const calculateTimelinePosition = (item) => {
    const earliestDate = new Date(
      Math.min(...data.map((entry) => entry.startDate.getTime())),
    );

    const startMonths =
      (item.startDate.getFullYear() - earliestDate.getFullYear()) * 12 +
      (item.startDate.getMonth() - earliestDate.getMonth());

    const durationMonths =
      (item.endDate.getFullYear() - item.startDate.getFullYear()) * 12 +
      (item.endDate.getMonth() - item.startDate.getMonth());

    const topPosition = (startMonths / totalMonths) * 100;
    const height = (durationMonths / totalMonths) * 100;

    return { topPosition, height };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-bold mb-8 text-center">My SWE Journey</h1>

      <div className="relative">
        <div className="absolute left-0 w-1 bg-gray-200 h-full"></div>

        {data.map((item, index) => {
          const { topPosition, height } = calculateTimelinePosition(item);

          return (
            <div key={index} className="relative mb-12">
              <div
                className={`absolute left-0 w-1 ${item.color}`}
                style={{
                  top: `${topPosition}%`,
                  height: `${height}%`,
                  minHeight: "2rem",
                }}
              ></div>

              {/* Content */}
              <div className="ml-8 relative">
                <WorkCard {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorksContainer;
