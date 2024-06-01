/* eslint-disable @next/next/no-img-element */
import custom from "@/app/custom.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
function page() {
  return (
    <div className="flex   rounded-3xl  bg-slate-800" id={custom.higth}>
      <div
        className="bg-no-repeat   rounded-3xl mr-50 mx-20 mt-8"
        style={{
          backgroundImage: `url('https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/banner-bg.jpg')`,
          height: "900px",
        }}
      >
        <div className="mt-20 mx-12">
          <h1 className="mt-20 ">Welcome To Cyborg</h1>
          <h4>
            <br />
            <br />
            <br />
            <h1 className="text-10xl inline-block mb-2 sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
              BROWSE OUR
            </h1>
            <br />
            <h1 className="text-10xl inline-block mb-2 sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
              {" "}
              POPULAR GAMES
            </h1>
            <br />
            <h1 className="text-10xl inline-block mb-2  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
              {" "}
              HERE
            </h1>
          </h4>
          <br />

          <button class=" bg-pink-500  hover:bg-White-700 text-white font-bold py-2 px-4 rounded-full">
            Browse new
          </button>
        </div>
        <br />
        <br />
        <br />
        <div className="bg-slate-900 rounded-3xl mx-45 mt-8 ">
          <h1 className="text-6xl inline-block  underline underline-offset-4  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mt-7">
            Most Popular
          </h1>
          <h1 className="text-6xl inline-block   sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-pink-700">
            Right Now
          </h1>

          <div class="grid grid-cols-4 gap-2 w-85  mx-0   mt-5 ">
            <div className="bg-gray-700 mx-6   rounded-3xl ">
              {/* image 1  */}
              <img
                className="rounded-3xl  mx-2 mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-01.jpg"
                alt=""
              />

              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Fortnite
                <span className="ml-20">
                  4.8    
                </span>
              </h6>
              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                sandbox
                <span className="ml-12">2.3M </span>
              </h6>
            </div>
            <div className="bg-gray-700 mx-6   rounded-3xl ">
              {/* image 2  */}
              <img
                className="rounded-3xl  mx-2 mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-02.jpg"
                alt=""
              />
              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Pubg
                <span className="ml-20">
                  4.8 
                </span>
              </h6>

              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                Battle S<span className="ml-12">2.3M</span>
              </h6>
            </div>

            <div className="bg-gray-700 mx-6   rounded-3xl ">
              {/* image 3  */}
              <img
                className="rounded-3xl  mx-2 mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg"
                alt=""
              />

              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Dota2
                <span className="ml-20">4.8</span>
              </h6>
              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                Strem-X
                <span className="ml-12">2.3M</span>
              </h6>
            </div>
            <div className="bg-gray-700 mx-6  rounded-3xl ">
              {/* image 4  */}
              <img
                className="rounded-3xl  mx-2 mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-04.jpg"
                alt=""
              />
              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Cs-Go
                <span className="ml-20">4.8</span>
              </h6>
              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                Legendry
                <span className="ml-12">2.3M</span>
              </h6>
            </div>

            <div className="bg-gray-700 mx-6   rounded-3xl  ">
              {/* image 5  */}
              <img
                className="rounded-3xl   mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-05.jpg"
                alt=""
              />
              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Mini Craft
                <span className="ml-12">4.8</span>
              </h6>
              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                Legendry
                <span className="ml-12">2.3M</span>
              </h6>
            </div>
            <div className="bg-gray-700 mx-6   rounded-3xl ">
              {/* image 6  */}
              <img
                className="rounded-3xl   mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-06.jpg"
                alt=""
              />
              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Eagles Fly
                <span className="ml-12">4.8</span>
              </h6>
              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                Matrix Game
                <span className="ml-6">2.3M</span>
              </h6>
            </div>
            <div className="bg-gray-700 mx-6   rounded-3xl ">
              {/* image 7  */}
              <img
                className="rounded-3xl  mx-2 mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-07.jpg"
                alt=""
              />
              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Warface
                <span className="ml-12">4.8</span>
              </h6>
              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                Max 3D
                <span className="ml-12">2.3M</span>
              </h6>
            </div>
            <div className="bg-gray-700 mx-6   rounded-3xl ">
              {/* image 8  */}
              <img
                className="rounded-3xl  mx-2 mt-5"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-08.jpg"
                alt=""
              />
              <h6 className="mx-6 inline-block text-1xl  font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ">
                Warcraft
                <span className="ml-20">4.8</span>
              </h6>
              <br />
              <h6 className="mx-6 block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                Legendry
                <span className="ml-12">2.3M</span>
              </h6>
            </div>
          </div>
          <center>
            <button
              type="button"
              class="py-2.5 px-5 me-2 mt-4 mr-10 text-sm font-medium text-white-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              m
            >
              Discober popular
            </button>
          </center>
        </div>
        <br />
        <br />
        <div className="bg-slate-900 mt-23  rounded-3xl ">
          <h1 className="text-6xl inline-block ml-5  underline underline-offset-4  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mt-7">
            Yore Gaming
          </h1>
          <h1 className="text-6xl inline-block  mt-5  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-pink-700">
            Library
          </h1>
          <div class="grid grid-flow-row rounded-2xl mt-3 auto-cols-max">
            <div className=" rounded-2xl mt-2 ml-3 "></div>

            <div class="grid grid-cols-6  gap-12">
              <div className="">
                <img
                  className="rounded-2xl mb-2  ml-3 "
                  src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-01.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  text-sm  leading-6 dark:text-slate-100">
                  Dota 2
                </h6>
                <h6 className="block  font-medium  text-sky-500 dark:text-slate-400">
                  sandbox
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Data Added
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  24/08/2036
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Hours
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  634 H mins
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Currently
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  Downloaded
                </h6>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  class="py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Donwloaded
                </button>
              </div>
            </div>
            <br />
            <div class="grid grid-cols-6 gap-12">
              <div className="">
                <img
                  className="rounded-2xl ml-3"
                  src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-02.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  text-sm leading-6 dark:text-slate-100">
                  Fortnite
                </h6>
                <h6 className="block py-1 font-medium  text-sky-500 dark:text-slate-400">
                  sandbox
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Data Added
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  24/08/2036
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Hours
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  634 H mins
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Currently
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  Downloaded
                </h6>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  class="py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Donwloaded{" "}
                </button>
              </div>
            </div>
            <br />
            <div class="grid grid-cols-6 gap-12">
              <div className="">
                <img
                  className="rounded-2xl mt-2 m-3"
                  src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  text-sm leading-6 dark:text-slate-100">
                  CS-GO
                </h6>
                <h6 className="block py-1 font-medium  text-sky-500 dark:text-slate-400">
                  Sandbox
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Data Added
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  24/08/2036
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Hours
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  634 H mins
                </h6>
              </div>
              <div className="mt-4">
                <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Currently
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  Downloaded
                </h6>
              </div>
              <div className="">
                <button
                  type="button"
                  class="py-2.5 px-5 me-2 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Donwloaded{" "}
                </button>
              </div>
            </div>
            <br />
          </div>
          <center>
            <button
              type="button"
              class="py-2.5 px-5 me-2 mt-4 mr-10 text-sm font-medium text-white-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              View Yore Library
            </button>
          </center>
        </div>
        <center>
          <h1 className="mt-12 ">
            Copyright © 2036 Cyborg Gaming Company. All rights reserved.
          </h1>
          <br />
          <h1 className="ml-15">Design: TemplateMo</h1>
        </center>
      </div>
    </div>
  );
}
export default page;
