import React from "react";
import Image from "next/image";
import tisologo3 from "../public/images/tisologo3.png";
import {
  AdjustmentsHorizontalIcon,
  HandThumbUpIcon,
  LightBulbIcon,
  TrophyIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

function SectionTiso() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 px-4 place-items-center">
        <div>
          <div className="flex items-center space-x-4">
            <Image src={tisologo3} alt="tiso logo" height={70} width={70} />
            <h1 className="text-3xl font-black text-gray-700">TISO</h1>
          </div>

          <p className="text-justify mt-6">
            TransWorld International Sports Organization(TISO) was founded in 2013
            as a sport organization that is geared towards nurturing, promoting
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

          <div className="space-y-3 mt-5 ml-4">
            <div className="flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
              <HandThumbUpIcon className="h-14 w-14 bg-[#23282d] p-2 text-yellow-500" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Mission</h1>
                <h6 className="text-xs">
                  We nurture, support and promote athletics talents
                </h6>
              </div>
            </div>
            <div className="flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
              <LightBulbIcon className="h-14 w-14 bg-[#23282d] p-2 text-yellow-500" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Vision</h1>
                <h6 className="text-xs">
                  To be a known organization that server equally
                </h6>
              </div>
            </div>
            <div className="flex items-center space-x-3 hover:bg-gray-100 cursor-pointer active:scale-90">
              <UserPlusIcon className="h-14 w-14 bg-[#23282d] p-2 text-yellow-500" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Join Us</h1>
                <h6 className="text-xs">
                  We would like to work with talented athlete of all ages,
                  nationality or gender
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTiso;
