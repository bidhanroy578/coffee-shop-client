import { BsCupHot } from "react-icons/bs";
import { Link } from "react-router";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import bglist from './../../assets/images/more/1.png'
import { useState } from "react";
const PopularProducts = ({coffees}) => {

const [updateCoffeeList , setUpdateCoffeeList] = useState(coffees)

    return (
        <div className=" content-center text-center mt-14 space-y-4">
            <p>--- Sip & Savor ---</p>
            <h3 className=" font-rancho text-5xl">Our Popular Products</h3>
            <Link to={'/add-new-coffee'}><button className="btn bg-[#e3b577] hover:bg-transparent font-rancho text-xl"><span className="hover:shadow-xs">Add Coffee </span><BsCupHot /></button></Link>
            <div className="bg-cover grid md:grid-cols-2 justify-items-center gap-4 bg-no-repeat bg-top mt-10 min-h-[70vh] text-center content-center" style={{backgroundImage: `url(${bglist})`}}>
               {
                updateCoffeeList.map(coffee => <ProductCard key={coffee._id} setUpdateCoffeeList={setUpdateCoffeeList} coffee={coffee} updateCoffeeList={updateCoffeeList}/>)
               }
            </div>
        </div>
    );
};
PopularProducts.propTypes = {
    coffees: PropTypes.array,
}
export default PopularProducts;