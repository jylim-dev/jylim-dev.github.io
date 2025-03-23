import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import WorkCard from "./WorkCard";
import PageTitle from "../shared/components/PageTitle";
import useWork from "./useWork";

const WorksContainer = () => {
  const { data, mode, handleSwitchToggle } = useWork();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <PageTitle>My SWE Journey</PageTitle>

      {/* can actaully be switch */}
      {/* <button
        onClick={handleSwitchToggle}
        className="flex gap-x-2 items-center mx-auto margin-auto bg-orange-400 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-lime-600 hover:shadow-md hover:cursor-pointer"
      >
        Wanna see what I earned? <HiChatBubbleLeftEllipsis />
      </button> */}

      <div className="mt-12 space-y-12">
        {data.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WorksContainer;
