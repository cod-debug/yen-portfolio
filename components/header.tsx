export default function Header() {
  return (
    <header>
      <nav className="flex justify-between p-3 items-center fixed w-full top-0 bg-transparent">
        <div className="flex flex-col items-center">
          <img
            src={"/assets/images/logo.png"}
            alt="Logo"
            width={50}
            height={30}
          />
          <div>
            <strong>J</strong>uliane <strong>F</strong>aith <strong>C</strong>
            uizon
          </div>
        </div>
        <div className="links">
          <a
            href="#welcome"
            className="p-3 hover:bg-[#526534] hover:text-white transition-all ease-in"
          >
            WELCOME
          </a>
          <a
            href="#overview"
            className="p-3 hover:bg-[#526534] hover:text-white transition-all ease-in"
          >
            OVERVIEW
          </a>
          <a
            href="#gallery"
            className="p-3 hover:bg-[#526534] hover:text-white transition-all ease-in"
          >
            GALLERY
          </a>
        </div>
      </nav>
    </header>
  );
}
