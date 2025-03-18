import {
  TbBrandLinkedinFilled,
  TbBrandInstagram,
  TbBrandGithubFilled,
  TbMail,
} from "react-icons/tb";

import PageTitle from "../shared/components/PageTitle";
import useAbout from "./useAbout";

const AboutContainer = () => {
  const { randomMe, decorationText, color } = useAbout();

  return (
    <main className="p-4">
      <div className="overflow-hidden rounded-full w-40 aspect-square mx-auto">
        <img src={randomMe} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-4">
        <div>
          <PageTitle>Jiyoung Lim</PageTitle>
          <h3 className="text-center">
            <span
              className={`${color} bg-clip-text text-transparent font-semibold`}
            >
              {decorationText}
            </span>{" "}
            Software Engineer
          </h3>
        </div>
        <div className="flex gap-2 text-3xl justify-center">
          <a
            href="https://www.linkedin.com/in/g0lim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform hover:scale-110"
          >
            <TbBrandLinkedinFilled />
          </a>

          <a
            href="https://www.instagram.com/g0lim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform hover:scale-110"
          >
            <TbBrandInstagram />
          </a>

          <a
            href="https://github.com/jylim-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-transform hover:scale-110"
          >
            <TbBrandGithubFilled />
          </a>
          <a
            href="mailto:jylim-dev@gmail.com"
            className="hover:text-green-600 transition-transform hover:scale-110"
          >
            <TbMail />
          </a>
        </div>
      </div>
      <div className="text-center space-y-2 md:w-3/4 mx-auto mt-4">
        <p>Hi, there👋</p>
        <p>
          I worked as a developer for 4+ years in South Korea, gaining
          experience in mobile and web development. Now, I'm in Canada looking
          for a software engineering role.
        </p>
        <p>
          I love to try new things, whether it's an activity, culture, or FOOD!
        </p>
        {/* <p>These are the stuff I like: </p> */}
      </div>
    </main>
  );
};

export default AboutContainer;
