'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './nav-link.module.css'

export default function NavLinks(){
    const path = usePathname();

    return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/meals" className={path.startsWith('/meals') ? styles.active: undefined }>Browse Meals</Link>
            </li>
            <li>
                <Link href="/community" className={path === '/community' ? styles.active: undefined }>Foodies Community</Link>
            </li>
        </ul>
    </nav>
    )
}