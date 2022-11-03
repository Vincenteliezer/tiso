import React from "react";
import Image from "next/image";
import tisologo3 from "../public/images/tisologo3.png";
import {
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  HandThumbUpIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

function SectionTiso() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 px-4">
        <div>
          <div className="flex items-center space-x-4">
            <Image src={tisologo3} alt="tiso logo" height={70} width={70} />
            <h1 className="text-3xl font-black text-gray-700">TISO</h1>
          </div>

          <p className="text-justify mt-6">
            TransWorld Internation Sports Organization(TISO) was founded in 2013
            as a sport organization that is geared towards nurturing,promoting
            and managing athlete's talent. It is a registered organization that
            manages professional athletes of any nationality.
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center space-x-2">
              <TrophyIcon className="h-12 w-12 text-yellow-500" />
              <h4 className="text-lg font-bold text-gray-600">
                WE'VE REPUTION FOR EXCELLENCE
              </h4>
            </div>
            <div className="flex items-center space-x-2">
              <AdjustmentsHorizontalIcon className="h-12 w-12 text-yellow-500" />
              <h4 className="text-lg font-bold text-gray-600">
                WE BUILD PARTNERSHIPS
              </h4>
            </div>
            <div className="flex items-center space-x-2">
              <HandThumbUpIcon className="h-12 w-12 text-yellow-500" />
              <h4 className="text-lg font-bold text-gray-600">
                GUIDED BY COMMITMENT
              </h4>
            </div>
            <div className="flex items-center space-x-2">
              <UserGroupIcon className="h-12 w-12 text-yellow-500" />
              <h4 className="text-lg font-bold text-gray-600">
                A TEAM OF PROFESSIONALS
              </h4>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-black text-gray-700">
            WHAT WE STAND FOR
          </h1>
          <Accordion className="mt-5 shadow-lg p-4 ">
            <AccordionItem>
              <AccordionHeader>
                <h3 className="text-gray-700 font-bold text-xl">SAFETY</h3>
              </AccordionHeader>

              <AccordionBody className="my-2">
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat consectetur est soluta ad? Sint odio qui dolores?
                    Nobis iure veritatis quod, aut voluptate ut, voluptas
                    reiciendis repellendus obcaecati autem quibusdam.
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                <h3 className="text-gray-700 font-bold text-xl">
                  CUSTOMER CARE
                </h3>
              </AccordionHeader>

              <AccordionBody className="my-2">
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellendus animi explicabo ratione? Praesentium commodi
                    unde reprehenderit laboriosam a atque tempore sapiente
                    blanditiis sint ipsa, molestiae, veniam qui dolorem soluta
                    quas.
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                <h3 className="text-gray-700 font-bold text-xl">INTEGRITY</h3>
              </AccordionHeader>

              <AccordionBody>
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem distinctio adipisci ducimus velit assumenda sint
                    maxime dicta quos incidunt itaque blanditiis ipsa saepe
                    quisquam vitae aliquam, iste aperiam qui quae.
                  </p>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default SectionTiso;
