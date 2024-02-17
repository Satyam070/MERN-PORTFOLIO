import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [SelectedItemindex, SetSelectedItemIndex] = React.useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
            <img src={projects[SelectedItemindex].image} alt="" className="h-60 w-72" />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[SelectedItemindex].title}
            </h1>
            <p className="text-white">
              {projects[SelectedItemindex].description}
            </p>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque tempore vitae illum error id voluptatum debitis vero
              aspernatur, odio quidem officiis! Ratione sint eius ipsam nisi,
              eum totam fugiat nobis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
