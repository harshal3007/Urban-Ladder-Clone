import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderTwo.css"
export function SliderTwo() {

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
            <img src="https://www.ulcdn.net/media/Collection/listings/Lounge_Chairs-taxon_7.png?1675918263" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/Beds_taxon_8.png?1675918266" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/Dining_Chairs-taxon_9.png?1675918269" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/Coffee_Tables-taxon_1.png?1675918016" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/TV_Units-taxon-2.png?1675918237" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/Shoe_Racks-taxon_3.png?1675918241" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/Sofa_Beds_taxon_4.png?1675918246" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/Bookshelves-taxon_5.png?1675918252" alt="SliderImage" />
            <img src="https://www.ulcdn.net/media/Collection/listings/Dining-taxon_6.jpg?1675918258" alt="SliderImage" />
        </Carousel>
    );
};