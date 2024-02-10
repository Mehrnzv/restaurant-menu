import './laurels.css'
import spoon from '../../assets/spoon.svg'
import data from '../../data/MenuData'
import laurels from '../../assets/laurels.png'

const Laurels = () => {
  return (
    <section className='laurels' id='awards'>
      <div className='container'>
        <div className='laurels_content'>
          <div className='laurels_content-heading'>
            <p>Awards & Recognition</p>
            <img src={spoon} alt='spoon'/>
            <h1>Our Laurels</h1>
          </div>

          <div className='laurels_content-awards'>
            {data.awards.map(award => (
              <div className='awards_con' key={award.id}>
                <img src={award.imgUrl} alt={award.title}/>
                <div className='awards_text'>
                  <p className='awards_title'>{award.title}</p>
                  <p className='awards_subtitle'>{award.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='laurels_image'>
          <img src={laurels} alt='laurels'/>
        </div>
      </div>
    </section>
  )
}

export default Laurels
