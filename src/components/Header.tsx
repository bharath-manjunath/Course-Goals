import {type ReactNode} from "react";

interface HeaderProps {
    image : {
        src : string;
        alt : string;
    }
    children : ReactNode
}
export const Header : React.FC<HeaderProps> = ({image, children}) => {
    return (
        <header>
            <img src = {image.src} alt = {image.alt} />
            {children}
        </header>
        
    )
}