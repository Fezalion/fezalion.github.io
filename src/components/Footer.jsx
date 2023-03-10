function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 left-0 flex justify-between w-full pt-0 border-t group border-secondary-700 text-primary-100 bg-opacity-80 bg-primary-500">
        <span className="flex gap-1 px-3 py-3 text-sm lg:text-base">
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
