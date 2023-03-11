import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <>
      <section className="relative z-0 grid content-center w-auto h-auto min-w-full min-h-screen px-4 mx-auto text-center lg:min-h-screen lg:pb-8 lg:py-16 lg:px-12">
        <motion.article
          className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 snap-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.img
            className="block w-full"
            src="https://placehold.jp/990099/000000/300x300.png"
            alt="dashboard image"
            variants={item}
          />
          <motion.div className="mt-4 md:mt-0" variants={item}>
            <motion.h2 className="mb-4 text-4xl font-extrabold tracking-tight text-left text-primary-100">
              title
            </motion.h2>
            <motion.p className="mb-6 font-light text-left text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tenetur quaerat temporibus reiciendis dolore
              aperiam eveniet vitae, nesciunt distinctio provident. Explicabo
              modi recusandae nobis autem exercitationem eveniet obcaecati ab.
              Magni.
            </motion.p>
          </motion.div>
        </motion.article>
        <motion.article
          className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 snap-center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.div className="mt-4 md:mt-0" variants={item}>
            <motion.h2 className="mb-4 text-4xl font-extrabold tracking-tight text-right text-primary-100">
              title
            </motion.h2>
            <motion.p className="mb-6 font-light text-right text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tenetur quaerat temporibus reiciendis dolore
              aperiam eveniet vitae, nesciunt distinctio provident. Explicabo
              modi recusandae nobis autem exercitationem eveniet obcaecati ab.
              Magni.
            </motion.p>
          </motion.div>
          <motion.img
            className="block w-full"
            src="https://placehold.jp/990099/000000/300x300.png"
            alt="dashboard image"
            variants={item}
          />
        </motion.article>
      </section>
    </>
  );
}

export default About;
