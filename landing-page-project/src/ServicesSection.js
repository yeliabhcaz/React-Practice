const SERVICE_BLOCK_DATA = [
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-1.png',
    text: 'WEB DESIGN'
  },
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-2.png',
    text: 'ECOMMERCE'
  },
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-3.png',
    text: 'AUTOMATION'
  }
]

export default function ServicesSection() {
  return (
    <div id='services'>
      <h1>OUR SERVICES</h1>
      <div className='services-container'>
        {SERVICE_BLOCK_DATA.map( block => {
          return (
            <div className='services-block'>
              <img src={block.imgURL} />
              <p>{block.text}</p>
            </div>
        )})}
      </div>
    </div>
  )
}