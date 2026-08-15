import hamburgerIcon from "../../public/list.svg";

function HamburgerIcon(){
    return(
        <div className="w-10 h-10 bg-indigo-950 border-1 border-indigo-900 rounded-full flex justify-center items-center md:hidden">
            <img
          className="w-6"
          src={hamburgerIcon}
          alt="Hamburger icon"
        />
        </div>
    )
}

export default HamburgerIcon;