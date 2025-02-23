import { useLoaderData, } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const { name, supplier, category, photo, chef, taste, details, _id } = useLoaderData()
    function handleUpdateCoffee(e) {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const supplier = form.supplier.value
        const category = form.category.value
        const photo = form.photo.value
        const chef = form.chef.value
        const taste = form.taste.value
        const details = form.details.value
        const newCoffee = { name, supplier, category, photo, chef, taste, details }

        fetch(`https://coffee-shop-server-blond.vercel.app/coffee/${_id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Coffee details updated!",
                        icon: "success",
                        draggable: false
                      });
                }
            })
    }
    return (
        <div>
            <div className='bg-[#f4f3f0] p-10 text-center space-y-5'>
                <h3 className=' font-rancho text-5xl'>Add New Coffee</h3>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdateCoffee}>
                    <div className=' text-start w-full flex gap-5'>
                        <div className='w-1/2'> {/* input col 1   */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Name</legend>
                                <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="enter name here" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Supplier</legend>
                                <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="supplier name " />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Category</legend>
                                <input type="text" name='category' defaultValue={category} className="input w-full" placeholder="category name" />
                            </fieldset>
                        </div>
                        <div className='w-1/2'> {/* input col 2   */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Chef</legend>
                                <input type="text" name='chef' defaultValue={chef} className="input w-full" placeholder="enter chef name here" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Taste</legend>
                                <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="about taste" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Details</legend>
                                <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="details" />
                            </fieldset>
                        </div>
                    </div>
                    <fieldset className="fieldset text-start">
                        <legend className="fieldset-legend">Photo</legend>
                        <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo Url" />
                    </fieldset>
                    <input type="submit" value="Add Coffee" className='mt-4 btn w-full bg-[#d2b48c]' />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;