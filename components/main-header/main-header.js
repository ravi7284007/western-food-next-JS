import Link from "next/link";
import styles from '@/components/main-header/main-header.module.css'

import logoImg from '@/assets/logo.png'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLinks from "./nav-link";

export default function MainHeader(){

    return (
        <>
        <MainHeaderBackground/>
            <header className={styles.header}>
        <Link href="/" className={styles.logo}>
            <Image 
            src={logoImg} 
            alt="A plate with food on it." 
            />
            Western Food
        </Link>

      <NavLinks/>
    </header>
        </>
    )
}