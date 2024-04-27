import React, { useState } from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "../CustomCheckbox";

const technologies = [
  "React Native",
  "React",
  "Expo",
  "Tailwind Css",
  "NodeJS",
  "ExpressJs",
  "MongoDB",
  "Redux",
  "Firebase Admin and Auth",
  "Rest API",
  "JavaScript",
  "TypeScript",
];
const TechStack = ({ project, setData, data }) => {
  const { techStack } = project;
  const [groupSelectedNew, setGroupSelectedNew] = useState([...techStack]);

  const handleCheckboxChange = (selected) => {
    setGroupSelectedNew(selected);
    const { projects } = data;
    // get the project of current obj
    let projectTechStack = projects.find(
      ({ id }) => id === project.id
    );

    console.log("projectTechStack: ", projectTechStack);
    // update  the tech stack for that particular project with new 
    projectTechStack = {
      ...projectTechStack,
      techStack: selected,
    }

    console.log("projectTechStack updated: ", projectTechStack);

    // ste new  techstark to  state in parent component
    // setData({ ...data, projects: [...projects, projectTechStack] });
    ;
    // setData((prevData) => ({
    //   ...prevData,
    //   project: [
    //     ...prevData.projects,
    //     ([project.id]: {
    //       ...prevData.projects[project.id],
    //       techStack: selected,
    //     }),
    //   ],
    // }));
  };

//   console.log("groupSelectedNew", groupSelectedNew);

  //   console.log("groupSelectedNew", groupSelectedNew);
  return (
    <>
      <CheckboxGroup
        key={project.id}
        className="gap-1"
        orientation="horizontal"
        value={groupSelectedNew}
        onChange={handleCheckboxChange}
        size="sm"
      >
        {technologies.map((tech) => (
          <CustomCheckbox key={tech} value={tech}>
            {tech}
          </CustomCheckbox>
        ))}
      </CheckboxGroup>
      <p className="mt-4 ml-1 text-default-500">
        {/* Selected: {groupSelected.join(", ")} */}
      </p>
    </>
  );
};

export default TechStack;
