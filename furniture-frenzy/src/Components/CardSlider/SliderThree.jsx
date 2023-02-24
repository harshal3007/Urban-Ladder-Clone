import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderTwo.css"
export function SliderThree() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slidesToSlide: 2,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (

        <Carousel responsive={responsive} className="SliderTwo">
           <img src="https://www.ulcdn.net/media/Collection/listings/Lamps___Lighting-taxon_1.png?1675922995" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Bedsheets-taxon_2.png?1675922999" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Carpets-taxon_3.png?1675923006" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Cushion_Covers-taxon_5.png?1675923015" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Curtains-taxon_4.png?1675923010" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Bathroom_Accessories-taxon_6.png?1675923018" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Mirrors--taxon_7.png?1675923023" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Wall_Decor-taxon_9.png?1675923029" alt="SliderImage" />
           <img src="https://www.ulcdn.net/media/Collection/listings/Showpieces-taxon_8.png?1675923026" alt="SliderImage" />
        </Carousel>
    );
};