import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses() {
  const [SelectedItemindex, SetSelectedItemIndex] = React.useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;
  return (
    <div>
      <SectionTitle title="Courses" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((course, index) => (
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
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {courses[SelectedItemindex].title}
            </h1>
            {/* <p className="text-white">
              {courses[SelectedItemindex].description}
            </p> */}
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque tempore vitae illum error id voluptatum debitis vero
              aspernatur, odio quidem officiis! Ratione sint eius ipsam nisi,
              eum totam fugiat nobis.
            </p>
          </div>
          <img
            src={courses[SelectedItemindex].image}
            alt=""
            className="h-52 w-80 sm:w-60"
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
