import * as React from "react";
import { Link } from "react-router-dom";

type SectionWrapperProps = {
  bgColor?: string;
  isLimitedSection?: boolean;
  viewAllLink?: string;
  title: string;
  children: React.ReactNode;
};

export const SectionWrapper = (props: SectionWrapperProps) => {
  return (
    <>
      <div
        className={`bg-${props.bgColor} md:max-h-[961px] px-[3%] sm:px-[8.33333%] 2xl:px-[16.666%]`}
      >
        <div className="border-2 border-white flex flex-col max-h-[157px] p-4 sm:p-8">
          {props.isLimitedSection && (
            <div className="flex justify-start md:justify-end py-2 md:py-0  order-2 sm:order-1">
              <Link
                to={`${props.viewAllLink}`}
                className="border border-white px-8 py-2 text-white uppercase"
              >
                View All
              </Link>
            </div>
          )}
          <div className="flex justify-start order-1 sm:order-2">
            <span
              className={` uppercase text-white text-3xl tracking-wide font-black ${
                !props.isLimitedSection ? "mt-12" : ""
              }`}
            >
              {props.title}
            </span>
          </div>
        </div>
        
        {props.children}
      </div>
    </>
  );
};
SectionWrapper.defualtProps = {
  bgColor: "dark",
  title: "Sample",
  viewAllLink: "/",
  isLimitedSection: false,
};
