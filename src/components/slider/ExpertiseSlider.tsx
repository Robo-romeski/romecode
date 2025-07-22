import { ExpertiseData } from '../../constant/Expertise'
import ExpertiseCard from './ExpertiseCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Next from '../../assets/expertise/right.svg'
import Previous from '../../assets/expertise/left.svg'

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 -right-0 transform -translate-y-1/2 cursor-pointer z-10"
  >
    <img src={Next} />
  </div>
)

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 -left-20 transform -translate-y-1/2 cursor-pointer z-10"
  >
    <img src={Previous} />
  </div>
)

function ExpertiseSlider() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="max-w-[1300px] mx-auto py-14 relative">
      <Slider {...settings}>
        {ExpertiseData.map((data) => (
          <div
            key={data.title}
            className="max-h-[500px] max-w-[300px] md:max-w-[350px] mx-auto"
          >
            <ExpertiseCard expertise={data} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ExpertiseSlider
