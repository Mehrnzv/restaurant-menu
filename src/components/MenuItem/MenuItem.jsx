import './menuItem.css'

// eslint-disable-next-line react/prop-types
const MenuItem = ({ title, price, tags}) => {
  return (
    <div className='menu__container'>
        <div className='menu_box' >
          <div className='title-price'>
            <p className='menu-title'>{title}</p>
            <div className='menu-price-line'>
            <div className='menu-line'/>
              <p className='menu-price'>{price}</p>
            </div>
            
          </div>
          <p className='menu-tags'>{tags}</p>
        </div>
    </div>
  )
}

export default MenuItem
