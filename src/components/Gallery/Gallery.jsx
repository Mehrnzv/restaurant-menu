import { useRef } from 'react'
import spoon from '../../assets/spoon.svg'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import gallery01 from '../../assets/gallery01.png'
import gallery02 from '../../assets/gallery02.png'
import gallery03 from '../../assets/gallery03.png'
import gallery04 from '../../assets/gallery04.png'
import './gallery.css'

const Gallery = () => {
  const images = [gallery01, gallery02, gallery03, gallery04]
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='gallery'>
      <div className='container-gal'>
        <div className='gallery_content'>
          <p>Instagram</p>
          <img src={spoon} alt=''/>
          <h1>Photo Gallery</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button>View More</button>
        </div>

        <div className='gallery_images'>
          <div className='gallery_images-con' ref={scrollRef}>
            {images.map((image, index) => (
              <div className='gallery_images-card' key={index}>
                <img src={image} alt='Gallery'/>
                <BsInstagram className='gallery_images-icon'/>
              </div>
            ))}
          </div>

        <div className="gallery_images-arrows">
          <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('right')} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
