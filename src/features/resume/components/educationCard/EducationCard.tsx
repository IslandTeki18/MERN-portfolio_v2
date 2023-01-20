import * as React from "react";
import { IEducation } from "../../types/interfaces";

type EducationCardProps = {
  education: IEducation[];
};

export const EducationCard = (props: EducationCardProps) => {
  function renderEducation() {
    return props.education.map((item) => (
      <div className="flex flex-col border-l border-white ml-2 pb-5 pl-8 relative before:absolute before:top-0 before:left-[-12px] before:rounded-full before:w-6 before:h-6 before:bg-white before:border-2 before:border-white">
        <span className="text-xl md:text-2xl text-danger-500 font-semibold tracking-wide">
          {item.school}
        </span>
        <span className="py-1 px-2 sm:py-2 sm:px-4 my-2 bg-white text-dark w-fit">{item.timeline}</span>
        <span className="mb-4 font-semibold">{item.location}</span>
        <span>{item.summary}</span>
      </div>
    ));
  }

  return (
    <div className="border border-white text-white flex flex-col p-8">
      <span className="text-2xl sm:text-3xl uppercase font-bold mb-4">Education</span>
      {renderEducation()}
    </div>
  );
};
