import {AiOutlineSearch} from 'react-icons/ai';
import {RiLiveLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi';
import {FcMenu} from 'react-icons/fc';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className='left-navbar'>
            <div className="hamburger-menu">
                <FcMenu/>
            </div>
            <div className="youtube-brand">
                <img src={require('./Icons/YoutubeIcon.png')} className="youtube-icon" alt="" />
                <div className="nav-title">
                    Youtube
                </div>
            </div>
            </div>
            <div className="nav-search-input">
                <input type="text" className='search-input' placeholder="Search"/>
                <div className="search-icon-navbar">
                    <AiOutlineSearch/>
                </div>
            </div>
            <div className="user-profile-icons">
                <RiLiveLine/>
                <IoMdNotificationsOutline/>
                <BiUserCircle/>
            </div>
        </div>
    )
}

export default Navbar;