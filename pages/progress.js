import React from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import FooterMedia from "../components/FooterMedia";
import Image from "next/image";
import ath1 from "../public/images/athletes/ath1.jpg";
import prog1 from "../public/images/progress/prog1.jpeg";
import prog2 from "../public/images/progress/prog2.jpeg";
import prog3 from "../public/images/progress/prog3.jpg";
import prog4 from "../public/images/progress/prog4.jpeg";
import prog5 from "../public/images/progress/prog5.jpg";
import prog6 from "../public/images/progress/prog6.jpg";
import prog7 from "../public/images/progress/prog7.jpg";
import prog8 from "../public/images/progress/prog8.jpg";
import prog9 from "../public/images/progress/prog9.jpg";
import prog10 from "../public/images/progress/prog10.jpg";
import prog11 from "../public/images/progress/prog11.jpg";
import prog12 from "../public/images/progress/prog12.jpg";
import prog13 from "../public/images/progress/prog13.jpg";
import prog14 from "../public/images/progress/prog14.jpg";
import prog15 from "../public/images/progress/prog15.jpeg";
import prog16 from "../public/images/progress/prog16.jpg";
import aboutProf from "../public/images/aboutProf.jpg";

function progress() {
  return (
    <div>
      <Head>
        <title>TISO | Progress</title>
        <meta
          name="description"
          content="Transworld International Sports organization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarTop />
      <main className="container mx-auto px-2 py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="">
            <Image
              src={prog1}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Silvester- Transworld International Sport President and 2018
                Boston Marathon winner Linden Desiree
              </h5>
              <p className="text-xs">
                Transworld Internatiol Sport Organization president Silvester
                Fanuel poses for a photo with 2018 Boston Marathon champion
                Desiree Lenden. TISO has gain ground and many runner are shining
                locally
              </p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018-11-12
            </p>
          </div>

          <div className="">
            <Image
              src={prog3}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Silvester,Yator and Hezron in Nairobi Kenya
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 mt-2 top-3 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018-01-01
            </p>
          </div>

          <div className="">
            <Image
              src={prog2}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Stanley Wins Utah valley Marathon after throwing up
              </h5>
              <p className="text-xs">
                Stanley Wins Utah valley Marathon 2016 edition after throwing
                up. Stanley said even though he vomited he was still energetic
                to destroy a strong field.
              </p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018-03-08
            </p>
          </div>

          <div className="">
            <Image
              src={prog4}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                President Silvester at the 2017 Managers\' meeting in Nairobi
                Kenya.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018-01-01
            </p>
          </div>

          <div className="">
            <Image
              src={aboutProf}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                The President Transworld International Sports.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018-01-01
            </p>
          </div>

          <div className="">
            <Image
              src={prog5}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Transworld Team with the help of Ken Rotich pose for a snap
                after Training
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018-01-01
            </p>
          </div>

          <div className="">
            <Image
              src={prog6}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Joseph Amenya on Winning Mercedes Marathon -Alabama, USA.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-12-20
            </p>
          </div>

          <div className="">
            <Image
              src={prog7}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Lamech M. Mosoti at Victoria Int'l Marathon Canada,
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-12-20
            </p>
          </div>

          <div className="">
            <Image
              src={ath1}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Priscah Bartenge being interviewed by the press.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-12-20
            </p>
          </div>

          <div className="">
            <Image
              src={prog8}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                John Gathaiya at Austin 10/20 - Texas USA.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-12-20
            </p>
          </div>

          <div className="">
            <Image
              src={prog9}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Hellen Jepkurgat cruising on the roads of Europe.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-12-20
            </p>
          </div>

          <div className="">
            <Image
              src={prog10}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Job Mogusu in Japan.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-12-20
            </p>
          </div>

          <div className="">
            <Image
              src={prog11}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Boaz Kipyego cruising in style.
              </h5>
              <p className="text-xs"></p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-12-20
            </p>
          </div>

          <div className="">
            <Image
              src={prog12}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                TISO Athletes
              </h5>
              <p className="text-xs">
                TISO members and their manager after the race in Dallas Texas
              </p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-11-19
            </p>
          </div>

          <div className="">
            <Image
              src={prog13}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Stanley Boen Running Utah Valley Marathon
              </h5>
              <p className="text-xs">
                Stanley running the Utah Valley Marathon 2017.
              </p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-06-12
            </p>
          </div>

          <div className="">
            <Image
              src={prog14}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                TISO Athletes On the Road
              </h5>
              <p className="text-xs">TISO Athletes compiting in Colorado</p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-06-08
            </p>
          </div>

          <div className="">
            <Image
              src={prog15}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Hellen Jepkurgat Won LA marathon
              </h5>
              <p className="text-xs">
                This 2017 was our own who won Los Angeles international marathon
              </p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-06-08
            </p>
          </div>

          <div className="">
            <Image
              src={prog16}
              alt=""
              className=" h-[400px] w-full object-cover rounded-lg"
            />
            <div className="bottom-5 left-3 bg-white mr-3 bg-opacity-50 rounded-xl">
              <h5 className="text-black text-lg font-semibold">
                Stanley Boen 2nd In Austin Marathon
              </h5>
              <p className="text-xs">Stanley Boen impress in Austin 2015.</p>
            </div>
            <p className="right-4 top-3 mt-2 w-fit bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017-05-27
            </p>
          </div>
        </div>
      </main>
      <div className="w-full bg-[#23282d] py-4 ">
        <div className="container mx-auto">
          <Footer />
        </div>
        <div className="mt-4 border-b border-gray-500" />
        <div className="container mx-auto flex justify-between px-5 md:px-0 mt-2">
          <div className="text-sm text-gray-500">
            Copyright @2022 MadeBy V.E
          </div>
          <FooterMedia />
        </div>
      </div>
    </div>
  );
}

export default progress;
