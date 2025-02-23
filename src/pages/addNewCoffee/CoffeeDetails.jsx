import { useLoaderData, useNavigate } from "react-router";
import bgNew from './../../assets/images/more/11.png';
import { GoArrowLeft } from "react-icons/go";


const CoffeeDetails = () => {
    const navigate = useNavigate()
    const { name, supplier, category, photo, chef, taste, details } = useLoaderData()

    return (
        <div className=" bg-cover bg-top bg-repeat-y min-h-[80vh] pt-10 px-28 space-y-10 " style={{ backgroundImage: `url(${bgNew})` }}>
            <button onClick={() => navigate('/')} className='btn font-rancho text-3xl'><GoArrowLeft /> Back To Home</button>
            <div className='flex items-center justify-center gap-40 bg-[#f4f3f0] p-10 text-center space-y-5'>
                <img src={photo} alt={name} className="w-56"/>
                <div className="text-start">
                    <h3 className="font-rancho text-3xl mb-5">Niceties</h3>
                    <p><span className="font-bold">Name: </span>{name}</p>
                    <p><span className="font-bold">Supplier: </span>{supplier}</p>
                    <p><span className="font-bold">Category: </span>{category}</p>
                    <p><span className="font-bold">Chef: </span>{chef}</p>
                    <p><span className="font-bold">Taste: </span>{taste}</p>
                    <p><span className="font-bold">Details: </span>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;