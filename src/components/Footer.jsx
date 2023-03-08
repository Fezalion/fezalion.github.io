function Footer() {
  return (
    <>
      <footer className="relative block pt-8 lg:pt-0">
        <div className="fixed z-0 justify-between hidden w-full px-5 py-2 overflow-hidden lg:flex bottom-2 text-primary-100">
          <span className="px-3 py-3 bg-opacity-80 bg-primary-900">
            Built with Vite + React &#9829;
          </span>
          <span className="px-3 py-3 bg-opacity-80 bg-primary-900">
            &copy; 2023 Eren Kerimgil
          </span>
        </div>
        <div className="absolute bottom-0 left-0 z-0 flex justify-between w-full px-5 py-2 lg:hidden text-primary-100">
        <span className="px-3 py-3 bg-opacity-80 bg-primary-900">
            Built with Vite + React &#9829;
          </span>
          <span className="px-3 py-3 bg-opacity-80 bg-primary-900">
            &copy; 2023 Eren Kerimgil
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
