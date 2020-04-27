import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { MultiCaroselProps } from './_types';
import Carousel from 'react-multi-carousel';


const MultiCarosel: FunctionComponent<MultiCaroselProps> = (props: MultiCaroselProps) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <Styled.ContainerSocial>
      <Carousel  swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              transitionDuration={300}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["superLargeDesktop", "desktop", "mobile", "tablet"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              focusOnSelect={false}>
              {props.carouselImg.map((avatar, key) => (
                <div>
                <Styled.SocialImage src={avatar.avatar}/>
                </div>))}
              </Carousel> 
      </Styled.ContainerSocial>);
};

export default MultiCarosel;