import "./Header.css";
import { Avatar } from 'react-rainbow-components';
import logo from "../../images/logo.jpg";
import logo1 from "../../images/Logo (1).jpg"
import hamburger from "../../images/hamburger.jpg";
const logoStyle = { width: 45, height: 45 };
const hamburgerstyle = { width: 30, height: 30 };
const Header = (props) => {
    return (
        <div className="row">
            <div className="col-4 head1">
                <div className="row">
                    <div className="col-6">
                        <img
                            alt="hamburger"
                            className='logo'
                            style={hamburgerstyle}
                            src={hamburger} 
                            onClick={props.hamburgerClick}
                            />
                    </div>
                    <div className="col-6">
                        <Avatar
                            className='logo'
                            style={logoStyle}
                            src={logo} />
                    </div>
                </div>
            </div>
            <div className="col-4 head">
                <div className="row ">
                    <div className="col-12 head">
                        MONITORING OF STREET LIGHTING
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12 ">
                        <Avatar
                            className='logo'
                            style={logoStyle}
                            src={logo1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;