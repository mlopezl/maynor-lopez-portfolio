import logo from "../../public/logo.png"
import hamburgerIcon from "../../public/list.svg"

function Header(){
    return(
        <header className="w-full h-25 bg-gradient-to-r from-slate-800 to-slate-950 flex justify-between p-4">
            <img className="w-20" src={logo} alt="Logo" />
            <img className="w-10" src={hamburgerIcon} alt="Hamburger icon" />
        </header>
    )
}

export default Header;