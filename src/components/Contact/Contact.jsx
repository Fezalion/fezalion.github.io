import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { NavLink } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      delay: 0.2,
      ease: "anticipate",
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "anticipate" } },
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xvonboeo");
  if (state.succeeded) {
    return (
      <div className="relative z-0 mx-auto my-auto grid h-auto w-auto min-w-full content-center overflow-hidden text-center">
        <h1 className="mb-4 mt-16 text-6xl font-extrabold leading-none tracking-tight text-primary-100 md:text-6xl xl:text-6xl">
          Thank you!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
          Go back to{" "}
          <NavLink
            to="/"
            className="text-primary-100 transition-colors hover:text-secondary-600"
          >
            Homepage
          </NavLink>
          .
        </p>
      </div>
    );
  }
  return (
    <m.div
      className="mx-auto max-w-screen-md px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
        Contact Me
      </h1>
      <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        Want to send me a picture of your cat? Need details about my life? Do
        you just want to rant about something? Just send me an email below.
      </p>
      <m.form
        onSubmit={handleSubmit}
        className="space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.div variants={item}>
          <label
            htmlFor="email"
            className="mb-2 block text-left text-sm font-medium text-primary-100"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-sm text-primary-100 shadow-sm backdrop-blur-sm"
            placeholder="name@mail.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </m.div>
        <m.div className="sm:col-span-2" variants={item}>
          <label
            htmlFor="message"
            className="mb-2 block text-left text-sm font-medium text-primary-100"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-sm text-primary-100 shadow-sm backdrop-blur-sm"
            placeholder="Leave a comment..."
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </m.div>
        <m.button
          variants={item}
          disabled={state.submitting}
          type="submit"
          className="w-full rounded-lg bg-secondary-800 py-3 px-5 text-center text-sm font-medium text-primary-100 hover:bg-secondary-900"
        >
          Send message
        </m.button>
      </m.form>
    </m.div>
  );
}

function Contact() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        className="relative z-0 mx-auto h-auto min-h-screen w-auto min-w-full snap-center content-center overflow-y-scroll text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <m.div className="my-auto mx-auto max-h-screen min-h-fit w-full max-w-screen-xl pt-32 text-primary-100">
          <div className="mb-20 text-center">
            <m.div
              className="grid grid-flow-row grid-cols-1"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <ContactForm />
            </m.div>
          </div>
        </m.div>
      </m.section>
    </LazyMotion>
  );
}

export default Contact;
