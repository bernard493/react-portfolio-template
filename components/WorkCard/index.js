import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";

const WorkCard = ({ img, name, description, techStack, onClick }) => {

// into one string
  const techStackInSting = techStack.join( ", ");


  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <div onClick={onClick} className="cursor-pointer">
        <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300   pb-2 mob:h-auto">
          <img
            alt={`${name} ${description}`}
            className="w-full object-cover hover:scale-110 transition-all ease-out duration-300 "
            src={img}
            
          />
        </div>
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
      </div>
      <Accordion>
        <AccordionItem
          key={name}
          aria-label={`About ${name}`}
          // subtitle="Press to expand"
          title="Project Description"
        >
          {description ? description : "Description"}
        </AccordionItem>

        <AccordionItem
          key={techStackInSting}
          aria-label={`About ${name}`}
          title="Technologies used"
        >
          {techStackInSting}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WorkCard;
