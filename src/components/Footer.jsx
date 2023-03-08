function Footer() {
  return (
    <>
      <footer className="relative group bottom-0 left-0 w-full border-t border-secondary-700 flex pt-0 text-primary-100 justify-between bg-opacity-80 bg-primary-500">
        <span className="px-3 py-3 text-sm lg:text-base flex gap-1">
            Built with Vite + React <p className="group-hover:animate-bounce group-hover:text-secondary-500">&#9829;</p>
          </span>
          <span className="px-3 py-3 text-sm lg:text-base">
            &copy; 2023 Eren Kerimgil
          </span>
      </footer>
    </>
  );
}

export default Footer;
