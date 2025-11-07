import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
    return (
        <>
            <li>
                <Link href={''}>Home</Link>
            </li>
            <li>
                <Link href={''}>About</Link>
            </li>
            <li>
                <Link href={''}>Work</Link>
            </li>
            <li>
                <Link href={''}>Contact</Link>
            </li>
            {/* <li>
                <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li> */}

        </>
    )
}

export default NavLinks
