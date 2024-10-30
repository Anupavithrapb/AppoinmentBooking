// import React from 'react';
// import { FaUser } from 'react-icons/fa';
// import './Style/Navbar.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">Book My Doctor</div>
//             <ul className="navbar-links">
//                 <li>
//                     <a href="/home">Home</a>
//                 </li>
//                 <li>
//                     <a href="#a">About</a>
//                 </li>
//                 <li>
//                     <a href="/user">
//                         <FaUser className="user-icon" /> User
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;
import React from 'react';
import { FaUser } from 'react-icons/fa';
import './Style/Navbar.css';
// import  "../Image/bookmydoctor.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h4>Book My Doctor</h4>
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/home">Home </a>
                </li>
                <li>
                    <a href="#a">About</a>
                </li>
                <li>
                    <a href="/user">
                        <FaUser className="user-icon" /> User
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
