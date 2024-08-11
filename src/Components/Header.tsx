import { IconHexagonLetterS } from "@tabler/icons-react";

const Header=()=>{
return(
    <nav className="flex bg-bgColor h-[18vh] dm-mono-regular px-10 justify-between items-center">
        <IconHexagonLetterS color="#64FFDA" size={60} stroke={1.25}/>
        <div className="flex gap-4">
            <a className="text-textColor hover:text-primaryColor" href="#about">About</a>   
            <a className="text-textColor hover:text-primaryColor" href="#work">Work</a>   
            <a className="text-textColor hover:text-primaryColor" href="#experience">Experience</a> 
            <a className="text-textColor hover:text-primaryColor" href="#skills">Skills</a>     
            <a className="text-textColor hover:text-primaryColor" href="#contact">Contact</a>   
        </div>
    </nav>
);
}
export default Header;
