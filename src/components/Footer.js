import React from 'react'
import './footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper">
                <div className="footer-menu">
                    <li>
                        <h3>Contact Us</h3>
                    </li>
                    <li>
                        VARDHAMAN SPINNING AND GENERAL MILLS<br />(A UNIT OF VARDHAMAN TEXTILES LIMITED)
                    </li>
                    <li>
                        Chandigarh Road,Ludhiana-141010
                    </li>
                    <br />
                    <li>
                        E-mail: customercare@vardhaman.com
                    </li>
                    <li>
                        Phone: 81466-25292
                    </li>
                    <br />
                    <li>
                        Hours: MON - SAT FROM 10AM TO 5.45PM
                    </li>
                </div>
                <div className="footer-menu">
                    <li><a href="">
                        <h3>Footer Menu</h3>
                    </a></li>
                    <li><a href="">
                        Search
                    </a></li>
                    <li><a href="">
                        AboutUs
                    </a></li>
                    <li><a href="">
                        Privacy Policy
                    </a></li>
                    <li><a href="">
                        Returns And Cancellations
                    </a></li>
                    <li><a href="">
                        Terms and Conditions
                    </a></li>
                    <li><a href="">
                        State Locator
                    </a></li>
                </div>
                <div className="footer-menu">
                    <h3>Follow Us</h3>
                    <FacebookRoundedIcon className="icon" /><TwitterIcon className="icon" /><PinterestIcon className="icon" /><InstagramIcon className="icon" /><YouTubeIcon className="icon" /><EmailIcon className="icon" />
                </div>
                <div className="footer-menu ">
                    <h3>Subscribe</h3>
                    <p>Subscribe to our mailing list for exclusive offers & updates</p>
                    <div className="footerinput">
                        <input type="text" placeholder="Email Address" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="lower">
                <div className="lower-items">
                    <p>Copyright Ⓒ 2021 Vardhaman Knit Worls. <br /> Designed,Developed,Marketed & managed By TenJump</p>
                </div>
                <div className="lower-items-card">
                    <img src="https://icons-for-free.com/iconfiles/png/512/express+amex+billing+credit+card+payment+shop+icon-1320167879387312703.png" alt="" />
                    <img src="https://dharmamerchantservices.com/wp-content/uploads/2017/06/visa-logo-white-background.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="" />
                    <img src="https://www.gmkfreelogos.com/logos/M/img/maestro.gif" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer
