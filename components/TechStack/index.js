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
    
  // Find the project with the matching id
  const updatedProjects = projects.map((currentProject) => {
    if (currentProject.id === project.id) {
      // If they match, update the techStack property for this project
      return {
        ...currentProject,
        techStack: selected,
      };
    }
    // Otherwise, return the project unchanged
    return currentProject;
  });

  setData({
    ...data,
    projects: updatedProjects,
  });
  };

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
      
    </>
  );
};

export default TechStack;
