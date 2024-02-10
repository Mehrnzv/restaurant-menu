import './footer.css'
import spoon from '../../assets/spoon.svg'
import Newsletter from "../Newsletter/Newsletter"
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="footer">
      <Newsletter />
      <div className="container">
        <div className="footer_contactUs">
          <p>Contact Us</p>
          <p className='footer_loc'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='footer_number'>+1 212-344-1230</p>
          <p className='footer_number'>+1 212-555-1230</p>
        </div>

        <div className='footer_logo-social'>
          <h1>GERICHT</h1>
          <p>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={spoon} alt='spoon'/>
          <div className='social-media'>
            <FiFacebook className='social-media_icon' color='#fff' size={20}  />
            <FiTwitter className='social-media_icon' color='#fff' size={20} />
            <FiInstagram className='social-media_icon' color='#fff' size={20} />
          </div>
        </div>

        <div className='footer_workingHours'>
          <h1>Working Hours</h1>
          <p>Monday-Friday:</p>
          <p>08:00 am - 12:00 am</p>
          <p>Saturday-Sunday:</p>
          <p>07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className='footer_copyright'>
        <p>{new Date().getFullYear()} Gericht. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
