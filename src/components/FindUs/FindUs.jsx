import './findus.css'
import spoon from '../../assets/spoon.svg'
import findus from '../../assets/findus.png'

const FindUs = () => {
  return (
    <section className='findUs' id='contact'>
      <div className='container'>
        <div className='findUs_content'>
          <div className='findUs_content-text'>
            <p>Contact</p>
            <img src={spoon} alt='spoon'/>
            <h1>Find Us</h1>
            <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          </div>

          <div className='findUs_content-info'>
            <p>Opening Hours</p>
            <p className='findUs-hours'>Mon - Fri: 10:00 am - 02:00 am</p>
            <p className='findUs-hours'>Sat - Sun: 10:00 am - 03:00 am</p>
            <button className='custom_btn'>Visit Us</button>
          </div>
        </div>

        <div className='findUs_image'>
          <img src={findus} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default FindUs
