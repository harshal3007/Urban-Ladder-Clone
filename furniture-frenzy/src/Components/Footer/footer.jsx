import "./footer.css"
import { Link } from "react-router-dom"
import { IoIosCall, IoIosMail } from "react-icons/io"
import { GrFacebookOption, GrTwitter, GrPinterest, GrYoutube, GrInstagram, GrLinkedin } from "react-icons/gr"
import img1 from "./image/google-play-badge.png"
import img2 from "./image/app_store_badge.svg"
import img3 from "./image/Capture.PNG"

export function Footer() {
    return (
        <footer>
            <div className="footermain">
                <ul>
                    <h3>The Company:</h3>
                    <hr style={{ backgroundColor: "rgb(248, 86, 5)" }} />
                    <li>
                        <li>
                            <p>About Us</p>
                            <p>Help</p>
                            <p>Blog</p>
                            <p>Inside UL</p>
                        </li>
                        <li>
                            <p>Careers</p>
                            <p>Press</p>
                            <p>Team</p>
                            <p>Privacy Policy</p>
                        </li>
                    </li>
                </ul>
                <ul>
                    <h3>More Information:</h3>
                    <hr style={{ backgroundColor: "rgb(248, 86, 5)" }} />
                    <li>
                        <li>
                            <p>Fees and Payment</p>
                            <p>Shipping & Delivery</p>
                            <p>Terms and Conditions</p>
                            <p>Warranty, Return and Refund</p>
                        </li>
                        <li>
                            <p>Contact Us</p>
                            <p>Visit Us</p>
                            <p>Buy In Bulk</p>
                        </li>
                    </li>
                </ul>
                <ul>
                    <h3>Explore More</h3>
                    <hr style={{ backgroundColor: "rgb(248, 86, 5)" }} />
                    <li>
                        <li>
                            <p>Refer & Earn</p>
                            <p>Gift Cards</p>
                        </li>
                    </li>
                </ul>
                <ul>
                    <h3>Address</h3>
                    <hr style={{ backgroundColor: "rgb(248, 86, 5)" }} />
                    <li>
                        <li>
                            <p>Reliance Retail Limited,
                                3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai- 400 002, Maharashtra, India</p>
                            <p>CIN: U01100MH1999PLC120563</p>
                        </li>
                    </li>
                </ul>
            </div>
            <div className="footersecond">
                <div>
                    <h2>Connect With Us:</h2>
                    <hr />
                    <div class="footer-icons">
                        <Link to="" className="Call-icon"><IoIosCall /></Link>
                        <Link to="" className="mail-icon"><IoIosMail /></Link>
                        <Link to="" className="facebook-icon"><GrFacebookOption /></Link>
                        <Link to="" className="twitter-icon"><GrTwitter /></Link>
                        <Link to="" className="pinterest-icon"><GrPinterest /></Link>
                        <Link to="" className="youtube-icon"><GrYoutube /></Link>
                        <Link to="" className="instagram-icon"><GrInstagram /></Link>
                        <Link to="" className="linkedin-icon"><GrLinkedin /></Link>
                    </div>
                </div>
                <div>
                    <h2>Download App:</h2>
                    <hr />
                    <Link to="https://itunes.apple.com/us/app/urban-ladder/id959886087"> <img src={img2} alt="Download App" /></Link>
                    <Link to="https://play.google.com/store/apps/details?id=com.urbanladder.catalog"> <img src={img1} alt="Download App" /></Link>
                </div>
            </div>
            <div className="footerthird">
                <div>
                    <div><h2>Popular Furniture Categories:</h2></div>
                    <div><a href="/">
                        Bed , Beds By Design , Sofa Set , Wooden Sofa , Sofas By Design , Sofa Cum Bed , Double Bed , Single Bed , Queen Size Bed , King Size Bed , Chair , Wooden Table , Study Table , Study Chair , Wardrobe , Chest of Drawers , Futon , Loveseat , Dining Table Set , Dining Chair , Bookshelves , Shoe Rack , TV Units , Recliners , Furniture , Office Furniture , Office Table , Office Chair , 2 Seater Sofa , TV Cupboard , TV Showcase , TV Stand , Center Table</a></div>

                </div>
                <div>
                    <div><h2>Shop Furniture By Room:</h2></div>
                    <div><a href="/"> Living Room Furniture , Bedroom Furniture , Dining Room Furniture , Study Room Furniture , Bar Furniture , Balcony Furniture</a></div>

                </div>
                <div>
                    <div><h2>Popular Decor Categories:</h2></div>
                    <div> <a href="/">Home Decor , Carpets , Mirrors , Study Lamps , Table Lamps , Bed Sheets , Floor Lamps , Wall Lights , Lighting , Ceiling Lights , Quilt , Wall Decor , Wall Mirror , Table Decor , Table Cover , Table Napkin , Table Mat , Cushion Cover , Table Runners , Home Furnishing , Wall Art , Showpiece , Artificial Plants , Photo Frame , Candle Stand , Clocks , Wall Clocks , Festive Lights , Candles , Bath Mat , Vases , Flower Vase , Bathroom Accessories , Bathroom Mirrors</a></div>

                </div>
                <div>
                    <div><h2>Popular Mattress Categories:</h2></div>
                    <div><a href="/"> Mattresses , Single Bed Mattresses , Double Bed Mattresses , King Size Mattresses , Queen Size Mattresses , Foam Mattress , Coir Mattress , Latex Mattress , Spring Mattress , Orthopaedic Mattress</a></div>

                </div>
                <div>
                    <div><h2>Popular Tableware Categories:</h2></div>
                    <div><a href="/"> Shot Glass , Dinner Plates , Baking Tray , Forks , Dinner Set , Tumbler , Drinking Glass , Cutlery Holder , Tissue Holder , Bottle Opener , Spoons , Whiskey Glass , Kitchen Organizers , Hot Pot , Chef's Cap , Glass Jars , Kitchen Gloves , Kitchen Storage Containers , Bar Tools , Masala Box , Glass Bottles , Coasters , Cutlery Set , Knives Set , Oven Gloves , Aprons , Cake Stand , Fruit Basket , Spice Box , Beer Glass , Bowls , Oil Dispenser , Housewarming Gifts</a></div>

                </div>
                <div>
                    <div><h2>Delivering in:</h2></div>
                    <div><a href="/">Aanamalai , Ahmedabad , Alappuzha , Aler , Alibaug , Alleppey , Ambala , Ambarnath , Amdapur , Amtala , Anand , Anikorai , Arakkonam , Arimpur , Arnala , Arutla , Asansol , Athikunna , Athipalli , Aurangabad , Avanshi ... More</a></div>
                </div>
                <div>
                    <div><h2>We Accept:</h2></div>
                    <div><a href="/"><img src={img3} alt="" /></a></div>
                </div>
            </div>
            <div className="footerlast"><h2>© 2012-2023 URBAN LADDER</h2></div>
        </footer>
    )
}