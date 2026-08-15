import logo from "../../public/logo.png";

function Logo(){
    return(
        <div className="flex gap-0 justify-center items-center pr-6">
            <img className="w-15 md:w-20 lg:w-30 lg:h-30 m-0" src={logo} alt="Logo" />
            <p className="text-indigo-50 text-xl -ml-3 lg:text-2xl lg:-ml-5">aynor</p>
        </div>
    )
}

export default Logo;