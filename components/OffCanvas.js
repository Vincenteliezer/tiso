import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import Link from "next/link";

function OffCanvas() {
  return (
    <div className="md:hidden">
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <Bars3Icon className="h-8 w-8 active:scale-75 text-white" />
          </AccordionHeader>

          <AccordionBody>
            <div className="accordion-body">
              <div className="">
                <ul className="flex flex-col space-y-3  text-yellow-400 md:text-lg py-4">
                  <Link href="/">
                    <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                      Home
                    </li>
                  </Link>

                  <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                    Progress
                  </li>
                  <Link href="/athletes">
                    <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                      Athletes
                    </li>
                  </Link>

                  <Link href="/about">
                    <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                      About
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="cursor-pointer active:scale-75 hover:text-white hover:border-b">
                      Contact
                    </li>
                  </Link>

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
