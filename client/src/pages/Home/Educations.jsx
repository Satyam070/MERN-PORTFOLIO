import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Educations() {
  const [SelectedItemindex, SetSelectedItemIndex] = React.useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { educations } = portfolioData;
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {educations.map((education, index) => (
            <div
              key={index}
              onClick={() => {
                SetSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl p-5 ${
                  SelectedItemindex === index
                    ? `text-tertiary border-tertiary border-l-4 -ml-[3px]bg-[#1a7f5a31] py-3 `
                    : `text-white`
                }`}
              >
                {education.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {educations[SelectedItemindex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {educations[SelectedItemindex].college}
          </h1>
          <p className="text-white">
            {educations[SelectedItemindex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Educations;
