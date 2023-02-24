import { Footer } from "../Components/Footer/footer";
import { Upper } from "../Components/Header/Upper";
import Slider from "../Components/Slider/Slider"
import { CiPercent, CiStar, CiMonitor } from "react-icons/ci"
import { GiSofa, GiBed, GiTable, GiWoodenChair, GiDesk, GiBookshelf, GiBedLamp } from "react-icons/gi"
import { RiArchiveDrawerLine, RiStore3Line } from "react-icons/ri"
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md"
import { BsHddRack } from "react-icons/bs"
import "./Homepage.css"
import { SliderTwo } from "../Components/CardSlider/SliderTwo";
import { SliderThree } from "../Components/CardSlider/SliderThree";
import { SliderFour } from "../Components/CardSlider/SliderFour";
function HomePage() {

    return (
        <>
            <Upper />
            <Slider />
            <div>
                <div className=" furniture-range">
                    <h1>Explore Our Furniture Range</h1>
                    <hr />
                </div>
                <div className="icondiv">
                    <div>
                        <div><CiPercent /><h3>Deal Zone</h3></div>
                        <div><CiStar /> <h3>Best Seller</h3></div>
                        <div><GiSofa /> <h3>Sofas</h3></div>
                        <div><GiBed /> <h3>Beds</h3></div>
                        <div><RiArchiveDrawerLine /> <h3>Wardrobe</h3></div>
                        <div><MdOutlineAirlineSeatReclineExtra /> <h3>Recliners</h3></div>
                        <div><GiWoodenChair /> <h3>Seating</h3></div>
                    </div>
                    <div>
                        <div><GiTable /> <h3>Dinning</h3></div>
                        <div><CiMonitor /><h3>TV Units</h3></div>
                        <div><BsHddRack /><h3> Shoe Racks</h3></div>
                        <div><GiDesk /> <h3>Study</h3></div>
                        <div><GiBookshelf /> <h3>Bookshelves</h3></div>
                        <div><GiBedLamp /> <h3>Lighting</h3></div>
                        <div><RiStore3Line /> <h3>Stores</h3></div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" furniture-range">
                    <h1>Value Buys In Furniture</h1>
                    <hr />
                    <SliderTwo/>
                </div>
            </div>
            <div>
                <div className=" furniture-range">
                    <h1>Value Buys In Decor</h1>
                    <hr />
                    <SliderThree/>
                </div>
            </div>
            <div>
                <hr className="hrline"/>
                <div className=" furniture-range">
                    <h1>Popular Across Site</h1>
                    <hr />
                    <SliderFour/>
                </div>
            </div>
            <div>
                <div className="last-div">
                    <h1>SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY OF THE WEEK.</h1>
                    <div>
                    <input type="email"  placeholder="Your Email ID"/>
                    <button>SUBSCRIBE</button>

                    </div>
                    
                </div>
            </div>





                <Footer />

            </>
            )

}

            export default HomePage;