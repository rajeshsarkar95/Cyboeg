/* eslint-disable @next/next/no-img-element */
import React from "react";

function page() {
  return (
    <div>
      <div className="bg-slate-700 rounded-2xl">
        <div className="grid grid-cols-2 gap-2">
          <div className="ml-64">
            <img
              className="rounded-3xl h-64 w-64 mr-10 mt-10 ml-10"
              src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/feature-left.jpg"
              alt=""
            />
          </div>
          <div className="mr-12">
            <img
              className="rounded-3xl mr-10 mt-10"
              src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/feature-right.jpg"
              alt=""
            />
          </div>
        </div>
        <center>
          <h1 className="text-7xl inline-block    sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mt-7">
            FORTNITE DETAILS
          </h1>
        </center>
        <div className="bg-slate-900 ml-24 mr-24 rounded-2xl">
          <div className="grid grid-cols-2">
            <div className="ml-23 bg-slate-800 mr-12 mt-12 ml-12 h-20  rounded-2xl"></div>
            <div className="ml-23 bg-slate-800 mr-12 ml-12 mt-12  h-20 rounded-2xl"></div>
          </div>
          <div className="grid grid-cols-3 mt-12 ml-8">
            <div>
              <img
                className="rounded-2xl"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/details-01.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-2xl"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/details-02.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-2xl"
                src="https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/details-03.jpg"
                alt=""
              />
            </div>
          </div>
          <h1 className=' ml-4 mt-8 mb-7  text-sm leading-5 text-slate-600 dark:text-slate-400"'>
            Cyborg Gaming is free HTML CSS website template provided by
            TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small
            contribution via PayPal to info [at] templatemo.com and thank you
            for supporting. If you want to get the PSD source files, please
            contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei
            elit, sed doers eiusmod lisum hored tempor
          </h1>
          <center>
            <button
              type="button"
              class="py-2.5 px-5 me-2  text-sm font-medium text-white-900 focus:outline-none bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Download Fortnite New
            </button>
          </center>
        </div>
        <div className="bg-slate-900 mt-20 ml-24 mr-24 rounded-2xl">
          <div className="grid grid-cols-4 gap-2"></div>
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
