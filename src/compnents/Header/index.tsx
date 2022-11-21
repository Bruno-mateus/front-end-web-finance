import { HeaderContent } from "./styles";
import logo from '../../assets/logo-ngcash.svg'
import Image from "next/image";
export function Header(){
    return(
        <HeaderContent>
            <Image src={logo.src} width={80} height={80} alt=""/>
        </HeaderContent>
    )
}