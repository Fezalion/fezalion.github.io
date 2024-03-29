function Footer() {
  return (
    <>
      <footer className="group absolute bottom-0 left-0 flex w-full justify-between border-t border-secondary-700 bg-primary-500 bg-opacity-80 text-primary-100">
        <span className="flex gap-1 px-3 py-3 text-sm lg:text-base">
          Built with Vite + React{" "}
          <p className="group-hover:animate-bounce group-hover:text-secondary-600">
            &#9829;
          </p>
        </span>
        <span className="px-3 py-3 text-right text-sm lg:text-base">
          <p
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dct="http://purl.org/dc/terms/"
          >
            <a
              property="dct:title"
              rel="cc:attributionURL"
              href="https://github.com/Fezalion/fezalion.tech"
              className="text-secondary-600"
            >
              Fezalion Portfolio Website
            </a>{" "}
            by{" "}
            <a
              rel="cc:attributionURL dct:creator"
              property="cc:attributionName"
              href="https://github.com/Fezalion"
              className="text-secondary-600"
            >
              Eren Kerimgil
            </a>{" "}
            is licensed under{" "}
            <a
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
              style={{ display: "inline-block" }}
              className="text-secondary-600"
            >
              CC BY-NC-SA 4.0
            </a>
          </p>
        </span>
      </footer>
    </>
  );
}

export default Footer;
