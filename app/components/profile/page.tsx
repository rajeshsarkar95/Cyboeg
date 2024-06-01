/* eslint-disable @next/next/no-img-element*/
"use client";
import React from "react";
import Custom from "@/app/custom.module.css";

function page() {
  return (
    <>
    <div>
      <div className="flex  rounded-3xl mt-6  bg-slate-800" id={Custom.higth1}>
        <div
          className=" bg-slate-900 mt-7 rounded-2xl mr-12 ml-12 "
          id={Custom.h}
        >
          <div className="inline-grid grid-cols-3 mt-12 ml-10 mr-10 gap-3  rounded-3xl">
            <div className="  mt-12  ml-12">
              <img
                className="rounded-3xl h-72 "
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/profile.jpg"
                alt=""
              />
            </div>

            <div className="ml-6 mt-4">
              <button
                type="button"
                className="py-2.5 px-5 me-2 mt-4 mr-10 text-sm font-medium text-white-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Ofline
              </button>
              <br />
              <h1 className="inline-block text-2xl mt-2 sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Alan Smithhee
              </h1>
              <p className="block py-1 font-medium mt-12 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                You Haven't Gone Live yet. Go Live By Touching The Button <br />
                Below
              </p>
              <button
                type="button"
                className="py-2.5 px-5 me-2 mt-12 mr-10 text-sm font-medium text-white-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Start Live stream
              </button>
            </div>

            <div className="dark:bg-gray-800 rounded-3xl h-72 mt-6 mr-6 ">
              <div className="mt-12 ml-10 text-gray-500  hover:text- rounded-md px-3 py-2 text-sm font-medium">
                <h1 className="mb-3">
                  Game Downloaded <span className="ml-12">3</span>{" "}
                </h1>
                <br />
                <h1 className="mb-3">
                  {" "}
                  Friends Online <span className="ml-20">16</span>{" "}
                </h1>
                <br />
                <h1>
                  Live Steams <span className="ml-20">None</span>{" "}
                </h1>
                <br />
                <h1 className="mb-3">
                  {" "}
                  Clips <span className="ml-20">29</span>{" "}
                </h1>
              </div>
            </div>
            <h1 className="text-6xl inline-block  underline underline-offset-4  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mt-7">
              yore Most Popular
              <h1 className="text-6xl inline-block   sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-pink-700">
                {" "}
                Clips
              </h1>
            </h1>
          </div>
          <div className=" mt-10 rounded-2xl inline-grid grid-cols-4 gap-4 ml-14">
            <div className="mb-2 ml-5 bg-slate-700 h-56 w-52 rounded-2xl ">
              <img
                className="rounded-3xl ml-2 mt-4"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-01.jpg"
                alt=""
              />
              <h1 className="sticky ml-4 mt-3 z-10  text-sm leading-6 font-semibold text-slate-700   dark:text-slate-300">
                {" "}
                First clips
                <span className="ml-12">250</span>
              </h1>
            </div>
            <div className="mb-2 ml-5 bg-slate-700 h-56 w-52 rounded-2xl ">
              <img
                className="rounded-3xl ml-2 mt-4"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-02.jpg"
                alt=""
              />
              <h1 className="sticky ml-4 mt-3 z-10  text-sm leading-6 font-semibold text-slate-700   dark:text-slate-300">
                {" "}
                First clips
                <span className="ml-12">250</span>
              </h1>
            </div>
            <div className="mb-2 ml-5 bg-slate-700 h-56 w-52 rounded-2xl ">
              <img
                className="rounded-3xl ml-2 mt-4"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-03.jpg"
                alt=""
              />
              <h1 className="sticky ml-4 mt-3 z-10  text-sm leading-6 font-semibold text-slate-700   dark:text-slate-300">
                {" "}
                First clips
                <span className="ml-12">250</span>
              </h1>
            </div>
            <div className="mb-2 ml-5 bg-slate-700 h-56 w-52 rounded-2xl ">
              <img
                className="rounded-3xl ml-2 mt-4"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/clip-04.jpg"
                alt=""
              />
              <h1 className="sticky ml-4 mt-3 z-10  text-sm leading-6 font-semibold text-slate-700   dark:text-slate-300">
                {" "}
                First clips
                <span className="ml-12">250</span>
              </h1>
            </div>
          </div>
          <center>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 mt-7  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Load More Clips
            </button>
          </center>
          <div className=" bg-slate-900 rounded-2xl" id={Custom.h2}>
            <h1 className="text-6xl inline-block ml-5  underline underline-offset-4  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mt-7">
              Yore Gaming
            </h1>
            <h1 className="text-6xl inline-block  mt-5  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-pink-700">
              Library
            </h1>
            {/* footer section start now */}
            <div className="grid grid-cols-6 mt-7 gap-6">
              <div>
                <img
                className="rounded-2xl mb-2  ml-3"
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
                
              </div >
              <div className="mt-4">
              <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Data Added
                </h6>
                <h6 className="block py-1 font-medium text-sky-500 dark:text-slate-400 text-sm">
                  24/08/2036
                </h6>
              </div>
              <div className="mt-4" >
              <h6 className="text-slate-900 font-semibold  dark:text-slate-100 text-sm">
                  Hours Played
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
                  className="py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Donwloaded
                </button>
              </div>
              {/* row end now  */}
              <div>
                <img
                className="rounded-2xl mb-2  ml-3"
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
                  className="py-2.5 mt-2 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Donwloaded{" "}
                </button>
              </div>
              {/* row end now  */}
              <div>
                <img
                className="rounded-2xl mb-2  ml-3"
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
              <div className="mt-2">
              <button
                  type="button"
                  className="py-2.5 px-5 me-2 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Donwloaded{" "}
                </button>
              </div>
              {/* row end now */}
            </div>
            {/* footer section end now */}
          </div>
          <center>
          <h1 className="mt-12 ">Copyright © 2036 Cyborg Gaming Company. All rights reserved.</h1>
        <br/>
        <h1 className="ml-15">Design: TemplateMo</h1>
          </center>
        </div>
      </div>
    </div>
    </>
  );
}
export default page;
