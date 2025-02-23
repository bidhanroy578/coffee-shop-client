import PropTypes from "prop-types";
import { useContext } from "react";
import { BsEyeFill } from "react-icons/bs";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../context_provider/AuthContext";
import { useNavigate } from "react-router";
const ProductCard = ({ coffee, setUpdateCoffeeList, updateCoffeeList }) => {
    const { user } = useContext(AuthContext)
    const { name, photo, chef, _id } = coffee;
    const navigate = useNavigate()
    function handleSwl(link){
        Swal.fire({
            title: "You are not logged in.",
            text: "please log in first.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log in"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(link)
            }
        });
    }
    function handleView() {
        if (user) navigate(`/coffee-details/${_id}`)
        if (!user) {
            handleSwl(`/coffee-details/${_id}`)
        }
    }
    function handleEdit() {
        if (user) navigate(`/update-coffee/${_id}`)
        if (!user) {
           handleSwl(`/update-coffee/${_id}`)
        }
    }
    function handleDelete() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-shop-server-blond.vercel.app/coffee/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const coffees = updateCoffeeList.filter(coff => coff._id !== coffee._id)
                            setUpdateCoffeeList(coffees)
                        }
                    })

            }
        });
    }

    return (
        <div className="flex items-center justify-between md:justify-center md:gap-5 lg:gap-10 xl:gap-20 lg:p-8 bg-[#dcd3b88c] w-full">
            <img src={photo} className="w-[150px]" />
            <div className="font-bold text-start">
                <p>Name: <span className="font-normal">{name}</span></p>
                <p>Chef: <span className="font-normal">{chef}</span></p>
                <p>Price: <span className="font-normal">890 tk</span></p>
            </div>
            <div className="flex flex-col gap-3">
                <button onClick={handleView} className="btn bg-[#d2b48c]"><BsEyeFill className="text-white" /></button>
                <button onClick={handleEdit} className="btn bg-black"><IoPencil className="text-white font-black" /></button>
                <button onClick={handleDelete} className="btn bg-[#ea4744]"><MdDelete className="text-white" /></button>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    coffee: PropTypes.object,
    updateCoffeeList: PropTypes.array,
    setUpdateCoffeeList: PropTypes.func
}
export default ProductCard;