import { useRef } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

// data
import { carouselComponentData } from "./service/data/carouselComponentData"
import styled from "styled-components"

const CarouselContainer = styled.section`
  background: #3d3d3d;
  padding: 50px 0;
`
const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  cursor: grab;
  .left-arrow,
  .right-arrow {
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    top: calc(50% - 5rem);
    cursor: pointer;
    transition: transform 0.3s;
    user-select: none;
    :hover {
      transform: scale(1.04);
    }
  }
  .left-arrow {
    left: 5%;
  }
  .right-arrow {
    right: 5%;
  }
`
const ImgContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50rem;
  padding: 1rem;
  box-sizing: border-box;
  img {
    user-select: none;
    cursor: grab;
    width: 100%;
  }
`

export const CarouselComponent = () => {
  const carouselWrapperElement = useRef(null)
  const handleDragStart = (e) => e.preventDefault()
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }
  const items = carouselComponentData.map((item) => {
    return (
      <ImgContent onDragStart={handleDragStart}>
        <img src={item.pathName} alt={item.name} />
      </ImgContent>
    )
  })
  return (
    <CarouselContainer>
      <CarouselWrapper className='centralizer'>
        <MdKeyboardArrowLeft
          size='10rem'
          color='white'
          className='left-arrow'
          onClick={() => carouselWrapperElement.current.slidePrev()}
        />
        <AliceCarousel
          ref={carouselWrapperElement}
          items={items}
          disableButtonsControls={true}
          disableDotsControls={true}
          responsive={responsive}
          infinite={true}
          mouseTracking
        />
        <MdKeyboardArrowRight
          size='10rem'
          color='white'
          className='right-arrow'
          onClick={() => carouselWrapperElement.current.slideNext()}
        />
      </CarouselWrapper>
    </CarouselContainer>
  )
}
