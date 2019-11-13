import React from 'react';
import Dropdown from './Dropdown';

function Nav() {

    return (
        <nav className="header__navbar">
            <Dropdown />
        </nav>
    )
}

export default Nav;



// let state = {
//     links: [
//         {
//             id: 0,
//             title: 'Home',
//             selected: false,
//             key: 'links'
//         },
//         {
//             id: 1,
//             title: 'Projects',
//             selected: false,
//             key: 'links'
//         },
//         {
//             id: 2,
//             title: 'About Me',
//             selected: false,
//             key: 'links'
//         },
//         {
//             id: 3,
//             title: 'Experience',
//             selected: false,
//             key: 'links'
//         }
//     ]
// }