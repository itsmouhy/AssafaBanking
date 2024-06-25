import React from "react";
import {Link} from "react-router-dom";
import "../style/nav.css"
import logo from "../images/logo.png";
<link href='https://fonts.googleapis.com/css?family=Anton' rel='stylesheet'></link>
function Nav(){


        const navbar = React.useRef();
        const [isClicked, setIsClicked] = React.useState(false);

        
        const navToggle = () => {
            
            if(isClicked){
                navbar.current.style.display="none"
               
            }else{
                navbar.current.style.display="flex";   
            }
        }

    
    

    return (<nav>
  
    <i onClick={()=>{
        setIsClicked(!isClicked);
        navToggle();
    }} id="hamburger" className={isClicked===true?"fas fa-times":"fas fa-bars"} ></i>

                    <ul ref={navbar} id="navbar">
                    <Link to="/" className="logo-link">
        <img src={logo} alt="logo" className="navbar-logo" />
    </Link>
                        <Link to="/transaction">
                        <br></br> 
                                    <li>Transaction History</li>
                        </Link>
                        <Link to="/view">
                        <br></br>  
                                    <li>View All Beneficiaries</li>
                        </Link>
        
                        <Link to="/view">
                        <br></br>  
                                    <li>Contact</li>
                        </Link>
                        <Link to="/view">
                        <br></br>  
                                    <li>Mentions légales</li>
                        </Link>
        
                     </ul>
                </nav>);
}

export default Nav;