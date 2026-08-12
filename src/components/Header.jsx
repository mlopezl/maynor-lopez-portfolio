import logo from "../../public/logo.png";
import hamburgerIcon from "../../public/list.svg";

function Header() {
  return (
    <header className="w-full h-25 flex justify-center p-4 border-b-1 border-indigo-900 xl:pr-0 lg:h-35">
      <div className="w-5xl flex justify-between items-center">
        <div className="flex gap-0 justify-center items-center pr-6">
            <img className="w-15 md:w-20 lg:w-30 lg:h-30 m-0" src={logo} alt="Logo" />
            <p className="text-indigo-50 text-xl -ml-3 lg:text-2xl lg:-ml-5">aynor</p>
        </div>
        <div className="w-10 h-10 bg-indigo-950 border-1 border-indigo-900 rounded-full flex justify-center items-center md:hidden">
            <img
          className="w-6"
          src={hamburgerIcon}
          alt="Hamburger icon"
        />
        </div>
        <ul className="hidden tracking-wider text-indigo-200 gap-3 lg:gap-8 text-md items-center md:flex">
            <li className="border-b-1 transition duration-300 bg-slate-900 text-indigo-500 border-1 border-indigo-900 p-2 rounded-xl"><a href="">Home</a></li>
            <li className="hover:text-indigo-50 border-b-1 border-transparent hover:border-indigo-50 transition duration-300"><a href="">About</a></li>
            <li className="hover:text-indigo-50 border-b-1 border-transparent hover:border-indigo-50 transition duration-300"><a href="">Projects</a></li>
            <li className="hover:text-indigo-50 border-b-1 border-transparent hover:border-indigo-50 transition duration-300"><a href="">Skills</a></li>
            <li className="hover:text-indigo-50 border-b-1 border-transparent hover:border-indigo-50 transition duration-300"><a href="">Contact</a></li>
        </ul>
        <button className="hidden tracking-wider text-md font-Inter bg-slate-900 text-indigo-500 border-indigo-800 border-1 p-2  rounded-xl md:block transtion duration-300 hover:brightness-130">Downdload CV</button>
      </div>
    </header>
  );
}

export default Header;
