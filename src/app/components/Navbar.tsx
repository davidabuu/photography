import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
const Navbar = () => {
  return (
    <div>
      <CCarousel controls indicators>
  <CCarouselItem>
    <CImage className="w-100 h-[100vh]" src='/for.jpg' alt="slide 1" />
    <CCarouselCaption className="d-none text-blue-500 d-md-block">
      <h5 className=' text-blue-500'>First slide label</h5>
      <p className=' text-blue-500'>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="h-[100vh] w-100"  src='/pic2.jpg' alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="h-[100vh] w-100" src='/pic3.webp'  alt="slide 3" />
    <CCarouselCaption className="flex">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
    </div>
  )
}

export default Navbar
