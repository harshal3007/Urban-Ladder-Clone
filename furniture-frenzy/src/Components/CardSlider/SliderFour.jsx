import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderTwo.css"
export function SliderFour() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slidesToSlide: 2,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
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

        <Carousel responsive={responsive} className="SliderFour">
            <div>
                <img src="https://www.ulcdn.net/images/products/149928/product/lp_2.jpg?1548906916" alt="SliderImage" />
                <div>
                    <p style={{fontSize:"12px",fontWeight:"400"}}>Stanhope Engineered Wood King Si...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>King Bed Size, Charcole Grey</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹66,299</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹47,735</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/223893/product/Twain_Study_Table_LP.jpg?1544673336" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Stanhope Engineered Wood Study Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Cherry Malemine FInish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹15,899</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹9,539</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/82584/product/1956_Lounge___Ottoman_Replica_Black_LP.jpg?1519629745" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>1956 Leatherrete Lounge Chair..</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Black</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹1,091991</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹70,979</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/159172/product/Thorpe_Upholstered_Storage_Bed_Queen_LP.jpg?1510822520" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Thrope Engineered Wood Queen Si...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Queen Bed Size</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹46,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹27,839</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Larson Solid Wood Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Cherry Malemine FInish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹15,899</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹12,539</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/201808/product/Truman_Study_Table__Creamy_Crust_Finish_Teak_LP.jpg?1624608812" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Turmain Solid Wood Study Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Cherry Malemine FInish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹15,899</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹9,539</p> 
            </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/150729/product/Thorpe_Upholstered_Storage_Bed_King_Revised_LP.jpg?1580728894" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Thrope Engineered Wood Queen Si...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Queen Bed Size</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹46,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹27,839</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/216193/product/Carven_lounge_chair_Maroon_replace_LP.jpg?1569471073" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Carven Fabric Lounge Chair...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Strong Wood Table</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹66,299</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹47,735</p>  
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/312894/product/Arabia_Dining_Table_TK_LP.jpg?1609230334" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Arabic Dining Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Table</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹40,299</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹23,735</p>  
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/152371/product/Angelou_Study_Desk_Walnut_replace_LP.jpg?1571374309" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Angelou Study Desk Walnut...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Studu Desk</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹20,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹13,839</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/15146/product/Zulu_Chest_of_Drawers_00_1H3T5079_LP.jpg?1449047474" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Emmada Solid Wood Chest Of 6...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>TeakWood Finish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹35,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹29,000</p> 
                </div>
            </div>
            <div>
                <img src="https://www.ulcdn.net/images/products/153013/product/Alberto_Bookshelf_teak_LP.jpg?1502342558" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Alberto Sloid BookShleves ...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>TeakWood Finish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹39,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹22,000</p> 
                </div>
            </div>
            
            

        </Carousel>
    );
};