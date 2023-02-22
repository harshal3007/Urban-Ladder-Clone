import { Navbar } from "./NavBar"
import "./Upper.css"
import { Link } from "react-router-dom"
export function Upper() {
    return (
        <>
            <div className="topdiv">
                <div>
                    <a href="./">Help</a>
                    <a href="./">Track Order</a>
                </div>
                <div>
                    <a href="./">Stores</a>
                    <a href="./">Bulk Order</a>
                    <a href="./">Gift Cards</a>
                    <a href="./">UL Services</a>
                </div>
            </div>

            <Navbar />
            <div className="dropdown">
                <ul>
                    <li>
                        <Link to="">Deal Zone</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Top Deals</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Daily Deals</Link></p>
                                        <p><Link to="#">Weekday Special Deals</Link></p>
                                        <p><Link to="#">Stunning Deals</Link></p>
                                        <p><Link to="#">Clearance Sale</Link></p>
                                        <p><Link to="#">All Products On Sale</Link></p>
                                        <p><Link to="#">All Decor On Sale</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Sofas & Recliners</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Sofas</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Sofas</Link></p>
                                        <p><Link to="#">Fabric Sofa Set</Link></p>
                                        <p><Link to="#">Wooden Sofa Set</Link></p>
                                        <p><Link to="#">Leather Sofa Set</Link></p>
                                        <p><Link to="#">Leatherette Sofa Set</Link></p>
                                        <p><Link to="#">L Shaped Sofa Set</Link></p>
                                        <p><Link to="#">Diwans</Link></p>
                                        <p><Link to="#">Loveseats</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Recliners</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Recliners</Link></p>
                                        <p><Link to="#">1 Seater Recliners</Link></p>
                                        <p><Link to="#">2 Seater Recliners</Link></p>
                                        <p><Link to="#">3 Seater Recliners</Link></p>
                                        <p><Link to="#">Fabric Recliners</Link></p>
                                        <p><Link to="#">Leatherette Recliners</Link></p>
                                        <p><Link to="#">Motorized Recliners</Link></p>
                                        <p><Link to="#">Manul Recliners</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Sofa Bed</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Sofa Bed</Link></p>
                                        <p><Link to="#">Fabric Sofa Bed</Link></p>
                                        <p><Link to="#">Wooden Sofa Bed</Link></p>
                                        <p><Link to="#">Futons</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Seating & Chairs</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Lounge Chairs</Link></p>
                                        <p><Link to="#">Accent Chairs</Link></p>
                                        <p><Link to="#">Ottomans & Stools</Link></p>
                                        <p><Link to="#">Bean Bags</Link></p>
                                        <p><Link to="#">Benches</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Rocking Chairs</Link></p>
                                        <p><Link to="#">Gaming Chairs</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Living</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Seating & Chairs</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Lounge Chairs</Link></p>
                                        <p><Link to="#">Accent Chairs</Link></p>
                                        <p><Link to="#">Recliners</Link></p>
                                        <p><Link to="#">Sofa Cum Bed</Link></p>
                                        <p><Link to="#">Ottomans & Stools</Link></p>
                                        <p><Link to="#">Bean Bags</Link></p>
                                        <p><Link to="#">Benches</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Rocking Chairs</Link></p>
                                        <p><Link to="#">Gaming Chairs</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Tabels</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Coffee Tabels</Link></p>
                                        <p><Link to="#">Side & End Tabels</Link></p>
                                        <p><Link to="#">Console Tabels</Link></p>
                                        <p><Link to="#">Nested Tabels</Link></p>
                                        <p><Link to="#">Coffee Tabels Sets</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Living Storage</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">TV Units</Link></p>
                                        <p><Link to="#">Bookshelves</Link></p>
                                        <p><Link to="#">Shoe Racks</Link></p>
                                        <p><Link to="#">Prayes Units</Link></p>
                                        <p><Link to="#">Showcases</Link></p>
                                        <p><Link to="#">Wall Shelves</Link></p>
                                        <p><Link to="#">Entryway & Foyer</Link></p>
                                        <p><Link to="#">Corner Storage</Link></p>
                                        <p><Link to="#">Room Divider</Link></p>
                                        <p><Link to="#">Living Room Sets</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Bedroom & Mattresses</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Beds</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Beds</Link></p>
                                        <p><Link to="#">Beds With Storage</Link></p>
                                        <p><Link to="#">Beds Without Storage</Link></p>
                                        <p><Link to="#">King Size Beds</Link></p>
                                        <p><Link to="#">Queen Size Beds</Link></p>
                                        <p><Link to="#">Single Beds</Link></p>
                                        <p><Link to="#">Double Beds</Link></p>
                                        <p><Link to="#">Bed-Mattress Sets</Link></p>
                                        <p><Link to="#">Upholstered Sets</Link></p>
                                        <p><Link to="#">Trundle Beds</Link></p>
                                        <p><Link to="#">Sofa Cum Beds</Link></p>
                                        <p><Link to="#">Bedroom Sets</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Mattresses</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Mattresses</Link></p>
                                        <p><Link to="#">King Size Mattresses</Link></p>
                                        <p><Link to="#">Queen Size Mattresses</Link></p>
                                        <p><Link to="#">Single Mattresses</Link></p>
                                        <p><Link to="#">Double Mattresses</Link></p>
                                        <p><Link to="#">Mattresses By Material</Link></p>
                                        <p><Link to="#">Mattresses By Brands</Link></p>
                                        <p><Link to="#">Mattresses By Range</Link></p>
                                        <p><Link to="#">Mattresses By Firmness</Link></p>
                                        <p><Link to="#">Mattress Protector</Link></p>
                                        <p><Link to="#">Pillows</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Storage & Accessories</Link></h5>
                                    </div>

                                    <div>
                                        <p><Link to="#">Wardrobes</Link></p>
                                        <p><Link to="#">Bedside Tables </Link></p>
                                        <p><Link to="#">Chest Of Drawers </Link></p>
                                        <p><Link to="#">Dresses & Mirrors </Link></p>
                                        <p><Link to="#">Modular Wardrobes </Link></p>
                                        <p><Link to="#">Bedroom Benches</Link></p>
                                        <p><Link to="#">Storage Chests</Link></p>
                                        <p><Link to="#">Bedroom Chairs</Link></p>
                                        <p><Link to="#">Plastic Storage</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Kids Room</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Kids Beds </Link></p>
                                        <p><Link to="#">Kids Tables</Link></p>
                                        <p><Link to="#">Bunk Beds</Link></p>
                                        <p><Link to="#">Kids Seating</Link></p>
                                        <p><Link to="#">Kids Decor</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Dining</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Dining Tables & Chairs</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">6 Seater Dining Tables Sets</Link></p>
                                        <p><Link to="#">4 Seater Dining Tables Sets</Link></p>
                                        <p><Link to="#">All 2 & 3 Seater Dining Tables Sets</Link></p>
                                        <p><Link to="#">All 8 Seater Dining Tables Sets</Link></p>
                                        <p><Link to="#">All Dining Tables Sets</Link></p>
                                        <p><Link to="#">Dining Tables</Link></p>
                                        <p><Link to="#">Dinning Chairs</Link></p>
                                        <p><Link to="#">Dinning Benches</Link></p>
                                        <p><Link to="#">Folding Dining Tables Sets</Link></p>
                                        <p><Link to="#">Chair Pads</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Storage & bar Furniture</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Crockery Units</Link></p>
                                        <p><Link to="#">Kitchens Cabinets & Rocks</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Bar Cabinets</Link></p>
                                        <p><Link to="#">Modular Kitchen</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li>
                        <Link to="">Storage</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Living Storage</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Shoe Racks</Link></p>
                                        <p><Link to="#">Bookshelevs</Link></p>
                                        <p><Link to="#">Showcase</Link></p>
                                        <p><Link to="#">Prayer Units</Link></p>
                                        <p><Link to="#">TV Units</Link></p>
                                        <p><Link to="#">Wall Shelves</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Bedroom Storage</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Coupboards</Link></p>
                                        <p><Link to="#">Chest Of Drawers </Link></p>
                                        <p><Link to="#">Bedside Tables </Link></p>
                                        <p><Link to="#">Dressers & Mirrors</Link></p>
                                        <p><Link to="#">Storage Chests</Link></p>
                                        <p><Link to="#">Modular Wordrobe</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Dining Storage</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Crockery Units</Link></p>
                                        <p><Link to="#">Kitchen Cabinets & racks</Link></p>
                                        <p><Link to="#">Bar Cabinets</Link></p>
                                        <p><Link to="#">Modular-Kitchen</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Kids Storage</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Kids Bookshelves</Link></p>
                                        <p><Link to="#">Kids Bedside Tables</Link></p>
                                        <p><Link to="#">Kids Storage Cabinets</Link></p>
                                        <p><Link to="#">Kids Chest Of Drawers</Link></p>
                                        <p><Link to="#">Kids Wardrobe</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Study</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Study Tables</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Study Tables</Link></p>
                                        <p><Link to="#">Computer Tables</Link></p>
                                        <p><Link to="#">Office Tables</Link></p>
                                        <p><Link to="#">Solid Wood Study Tables</Link></p>
                                        <p><Link to="#">Laptop Tables</Link></p>
                                        <p><Link to="#">Study Sets</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Study Chair</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Study Chair</Link></p>
                                        <p><Link to="#">Office Chair</Link></p>
                                        <p><Link to="#">Egronomics Study Chair</Link></p>
                                        <p><Link to="#">Accent Study Chair</Link></p>
                                        <p><Link to="#">Gaming Chair</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Storage</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Bookshelevs</Link></p>
                                        <p><Link to="#">Decor</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Decor</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Study Lamps</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Lighting & Decor</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Lighting</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Sofas</Link></p>
                                        <p><Link to="#">Fabric Sofa Set</Link></p>
                                        <p><Link to="#">Wooden Sofa Set</Link></p>
                                        <p><Link to="#">Leather Sofa Set</Link></p>
                                        <p><Link to="#">Leatherette Sofa Set</Link></p>
                                        <p><Link to="#">L Shaped Sofa Set</Link></p>
                                        <p><Link to="#">Diwans</Link></p>
                                        <p><Link to="#">Loveseats</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Carpets & Rugs</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Recliners</Link></p>
                                        <p><Link to="#">1 Seater Recliners</Link></p>
                                        <p><Link to="#">2 Seater Recliners</Link></p>
                                        <p><Link to="#">3 Seater Recliners</Link></p>
                                        <p><Link to="#">Fabric Recliners</Link></p>
                                        <p><Link to="#">Leatherette Recliners</Link></p>
                                        <p><Link to="#">Motorized Recliners</Link></p>
                                        <p><Link to="#">Manul Recliners</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Home Linen</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Sofa Bed</Link></p>
                                        <p><Link to="#">Fabric Sofa Bed</Link></p>
                                        <p><Link to="#">Wooden Sofa Bed</Link></p>
                                        <p><Link to="#">Futons</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Wall Decor</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Lounge Chairs</Link></p>
                                        <p><Link to="#">Accent Chairs</Link></p>
                                        <p><Link to="#">Ottomans & Stools</Link></p>
                                        <p><Link to="#">Bean Bags</Link></p>
                                        <p><Link to="#">Benches</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Rocking Chairs</Link></p>
                                        <p><Link to="#">Gaming Chairs</Link></p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Home Decor</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Lounge Chairs</Link></p>
                                        <p><Link to="#">Accent Chairs</Link></p>
                                        <p><Link to="#">Ottomans & Stools</Link></p>
                                        <p><Link to="#">Bean Bags</Link></p>
                                        <p><Link to="#">Benches</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Rocking Chairs</Link></p>
                                        <p><Link to="#">Gaming Chairs</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                    <li>
                        <Link to="">Outdoor</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Balcony & Outdoors</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Balcony Chairs</Link></p>
                                        <p><Link to="#">Balcony Sets</Link></p>
                                        <p><Link to="#">Swing Chairs</Link></p>
                                        <p><Link to="#">Outdoor tables</Link></p>
                                        <p><Link to="#">Hammocks</Link></p>
                                        <p><Link to="#">Plastic Chairs</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Interiors</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Urban Interiors</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Full Home Interiors</Link></p>
                                        <p><Link to="#">Modular Kitchen</Link></p>
                                        <p><Link to="#">Modular Wordrobe</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="">Trending</Link>
                        <div className="dropdown-content">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">House Of Urban Ladder</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">All Sofas</Link></p>
                                        <p><Link to="#">Fabric Sofa Set</Link></p>
                                        <p><Link to="#">Wooden Sofa Set</Link></p>
                                        <p><Link to="#">Leather Sofa Set</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">New Arrivals</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">1 Seater Recliners</Link></p>
                                        <p><Link to="#">2 Seater Recliners</Link></p>
                                        <p><Link to="#">3 Seater Recliners</Link></p>
                                        <p><Link to="#">Benches</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Rocking Chairs</Link></p>
                                        <p><Link to="#">Motorized Recliners</Link></p>
                                        <p><Link to="#">Manul Recliners</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">Best Sellers</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Fabric Sofa Bed</Link></p>
                                        <p><Link to="#">Wooden Sofa Bed</Link></p>
                                        <p><Link to="#">Futons</Link></p>
                                        <p><Link to="#">2 Seater Recliners</Link></p>
                                        <p><Link to="#">3 Seater Recliners</Link></p>
                                        <p><Link to="#">Fabric Recliners</Link></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">All Furniture</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Lounge Chairs</Link></p>
                                        <p><Link to="#">Accent Chairs</Link></p>
                                        <p><Link to="#">Ottomans & Stools</Link></p>
                                        <p><Link to="#">Bean Bags</Link></p>
                                        <p><Link to="#">Benches</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Rocking Chairs</Link></p>
                                        <p><Link to="#">Gaming Chairs</Link></p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <h5><Link to="#">UL Exclusive</Link></h5>
                                    </div>
                                    <div>
                                        <p><Link to="#">Lounge Chairs</Link></p>
                                        <p><Link to="#">Accent Chairs</Link></p>
                                        <p><Link to="#">Ottomans & Stools</Link></p>
                                        <p><Link to="#">Bean Bags</Link></p>
                                        <p><Link to="#">Benches</Link></p>
                                        <p><Link to="#">Bar Stools</Link></p>
                                        <p><Link to="#">Rocking Chairs</Link></p>
                                        <p><Link to="#">Gaming Chairs</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}


  