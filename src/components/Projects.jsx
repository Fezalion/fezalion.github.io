import { React, useState } from "react";

function Projects() {
  return (
    <>
      <section className="mt-64 lg:pb-32 lg:pt-0 lg:mt-0">
        <div className="z-0 px-4 pb-8 mx-auto max-w-screen-2xl sm:pb-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-100">
              I do play games a lot, and sometimes code my own tools.
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Here you can see some of the tools I use, or code myself.
            </p>
          </div>

          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <article>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-800 lg:h-12 lg:w-12">
                <svg
                  class="w-5 h-5 text-secondary-600 lg:w-6 lg:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-primary-100">Name</h3>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                quas, ea recusandae illo maiores architecto labore a harum qui
                nisi repudiandae delectus sequi adipisci deserunt? Ipsum ducimus
                cumque amet suscipit.
              </p>
            </article>    
            <article>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-800 lg:h-12 lg:w-12">
                <svg
                  class="w-5 h-5 text-secondary-600 lg:w-6 lg:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-primary-100">Name</h3>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                quas, ea recusandae illo maiores architecto labore a harum qui
                nisi repudiandae delectus sequi adipisci deserunt? Ipsum ducimus
                cumque amet suscipit.
              </p>
            </article> 
            <article>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-800 lg:h-12 lg:w-12">
                <svg
                  class="w-5 h-5 text-secondary-600 lg:w-6 lg:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-primary-100">Name</h3>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                quas, ea recusandae illo maiores architecto labore a harum qui
                nisi repudiandae delectus sequi adipisci deserunt? Ipsum ducimus
                cumque amet suscipit.
              </p>
            </article> 
            <article>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-800 lg:h-12 lg:w-12">
                <svg
                  class="w-5 h-5 text-secondary-600 lg:w-6 lg:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-primary-100">Name</h3>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                quas, ea recusandae illo maiores architecto labore a harum qui
                nisi repudiandae delectus sequi adipisci deserunt? Ipsum ducimus
                cumque amet suscipit.
              </p>
            </article> 
            <article>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-800 lg:h-12 lg:w-12">
                <svg
                  class="w-5 h-5 text-secondary-600 lg:w-6 lg:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-primary-100">Name</h3>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                quas, ea recusandae illo maiores architecto labore a harum qui
                nisi repudiandae delectus sequi adipisci deserunt? Ipsum ducimus
                cumque amet suscipit.
              </p>
            </article> 
            <article>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-800 lg:h-12 lg:w-12">
                <svg
                  class="w-5 h-5 text-secondary-600 lg:w-6 lg:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-primary-100">Name</h3>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                quas, ea recusandae illo maiores architecto labore a harum qui
                nisi repudiandae delectus sequi adipisci deserunt? Ipsum ducimus
                cumque amet suscipit.
              </p>
            </article>         
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
