const WorksContainer = () => {
  const data = [
    {
      position: "CMS Web Developer/Business planning officer",
      companyName: "Chung & Associates",
      duration: "Feb 2024 - Present",
      location: "Vancouver, 🇨🇦",
      details: [
        "Developed and maintained responsive websites for 6 startup businesses, ensuring user experience and SEO.",
        "Reviewed 50+ business models, and conducted business plan evaluations and research to support clients’ completion of the startup incubation process.",
      ],
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
    },
  ];

  return (
    <main>
      <h1>What I've done</h1>
      <div>
        {data.map((x, idx) => (
          <div key={idx}>
            <h3>{x.position}</h3>
            <p>{x.companyName}</p>
            <p>{x.duration}</p>
            <p>{x.location}</p>
            <ul>
              {x.details.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WorksContainer;
