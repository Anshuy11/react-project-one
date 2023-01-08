import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/one.webp";

const Services = () => {
  return (
    <div>
  
  <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={true}
  >

 <div>
 <img src={img1} alt="Item1" />
 <p>Solution is here,where are you? </p>
 </div>

 <div>
 <img src={img2} alt="Item2" />
 <p>Full Support to all your problems.</p>
 </div>

 <div>
 <img src={img3} alt="Item3" />
 <p>One place to all your problems.</p>
 </div>

 

  </Carousel>

  </div>
  )
};

export default Services