import React from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

function OffCanvas() {
  return (
    <div className="md:hidden">
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
          <Bars3Icon className="h-8 w-8 active:scale-75 text-white"/>
          </AccordionHeader>

          <AccordionBody>
            <div className="accordion-body">
              <div className="">
                <ul className="flex flex-col space-y-3  text-xs text-yellow-400 md:text-lg py-4">
                  <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                    Home
                  </li>
                  <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                    Progress
                  </li>
                  <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                    Athletes
                  </li>
                  <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                    About
                  </li>
                  <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                    Contact
                  </li>
                  <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                    Join
                  </li>
                </ul>
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default OffCanvas;
