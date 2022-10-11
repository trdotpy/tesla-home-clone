import React from 'react'
import Sections from './Sections'

const Hero = () => {
  const products = [
    {
      id: 1,
      name: 'Model 3',
      desc: 'Order Online for Touchless Delivery',
      image:
        'https://res.cloudinary.com/drij60fru/image/upload/v1665407743/M3-Homepage-Desktop-LHD_nzcdzg.jpg',
      btnLeft: 'Custom Order',
      btnRight: 'Existing Inventory',
    },
    {
      id: 2,
      name: 'Model Y',
      desc: 'Order Online for Touchless Delivery',
      image:
        'https://res.cloudinary.com/drij60fru/image/upload/v1665410759/Desktop-ModelY_khe2g4.jpg',
      btnLeft: 'Custom Order',
      btnRight: 'Existing Inventory',
    },
    {
      id: 3,
      name: 'Model S',
      desc: 'Order Online for Touchless Delivery',
      image:
        'https://res.cloudinary.com/drij60fru/image/upload/v1665410773/Homepage-Model-S-Desktop-LHD_mvadoo.jpg',
      btnLeft: 'Custom Order',
      btnRight: 'Existing Inventory',
    },
    {
      id: 4,
      name: 'Model X',
      desc: 'Order Online for Touchless Delivery',
      image:
        'https://res.cloudinary.com/drij60fru/image/upload/v1665410771/Homepage-Model-X-Desktop-LHD_j9hwzx.jpg',
      btnLeft: 'Custom Order',
      btnRight: 'Existing Inventory',
    },
    {
      id: 5,
      name: 'Solar Panels',
      desc: 'Lowest Cost Solar Panels in America',
      image:
        'https://res.cloudinary.com/drij60fru/image/upload/v1665410767/_25-HP-SolarPanels-D_davjtv.jpg',
      btnLeft: 'Order Now',
      btnRight: 'Learn More',
    },
    {
      id: 6,
      name: 'Solar Roof',
      desc: 'Produce Clean Energy From Your Roof',
      image:
        'https://res.cloudinary.com/drij60fru/image/upload/v1665410770/Homepage-SolarRoof-Desktop-Global_n6h9zc.jpg',
      btnLeft: 'Order Now',
      btnRight: 'Learn More',
    },
    {
      id: 7,
      name: 'Accessories',
      image:
        'https://res.cloudinary.com/drij60fru/image/upload/v1665410785/dd739764-bcaa-4263-9488-8c73bc9fb046_qk2vmo.jpg',
      btnLeft: 'Shop Now',
      btnRight: 'Learn More',
    },
  ]
  return (
    <div>
      {products.map((product) => (
        <Sections key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Hero
