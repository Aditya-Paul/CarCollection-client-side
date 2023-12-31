import Navbar from "../Home/Navbar/Navbar";
import { CiUser, CiImageOn, CiBadgeDollar } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { LuType } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {

    const getdata = useLoaderData()
    const {name, brandname, photo, price, rateing, description, types} = getdata
    console.log(name, brandname, photo, price, rateing, description, types)
    const handleUpdate = e => {
        e.preventDefault();
        // const form = e.target
        // const name = form.name.value
        // const brandname = form.brandname.value
        // const photo = form.photo.value
        // const price = form.price.value
        // const rateing = form.rateing.value
        // const description = form.description.value
        // const types = form.cartypes.value
        // console.log(name, brandname, photo, price, rateing, description, types)
    }
    return (
        <>
            <Navbar></Navbar>
            <form className="card-body " onSubmit={handleUpdate}>
                {/* Name */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <CiUser />
                        <span className="label-text text-pink-300">Name</span>
                    </div>
                    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered" required />
                </div>

                {/* Brand Name */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <LuType />
                        <span className="label-text text-pink-300">Brand Name</span>
                    </div>
                    <select id="cars" name="brandname" defaultValue={brandname} placeholder="Brand Name" className="bordered border-2 rounded-lg h-12">
                        <option value="Lamborgini">Lamborgini</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Audi">Audi</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Conference Planning">Ferrari</option>
                    </select>
                </div>

                {/* Image */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <CiImageOn />
                        <span className="label-text text-pink-300">Photo Url</span>
                    </div>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered" required />
                </div>

                {/* Price */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <CiBadgeDollar />
                        <span className="label-text text-pink-300">Price</span>
                    </div>
                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                </div>

                {/* Rateing */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <CiBadgeDollar />
                        <span className="label-text text-pink-300">Rateing</span>
                    </div>
                    <input type="text" name="rateing" defaultValue={rateing} placeholder="Rateing" className="input input-bordered" required />
                </div>

                {/* Sort Description */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <MdOutlineDescription />
                        <span className="label-text text-pink-300">Sort Description</span>
                    </div>
                    <input type="text" name="description" defaultValue={description} placeholder="Sort Description" className="input input-bordered" required />
                </div>


                {/* Type */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <LuType />
                        <span className="label-text text-pink-300">Type of Cars</span>
                    </div>
                    <select id="cars" name="cartypes" defaultValue={types} placeholder="type of Cars " className="bordered border-2 rounded-lg h-12">
                        <option value="Classic">Classic</option>
                        <option value="Sports">Sports</option>
                    </select>
                </div>

                <div className="form-control mt-6  items-center justify-center">
                    <button type="submit" className="btn bg-green-300 rounded-2xl w-1/2">Submit</button>
                </div>
            </form>



        </>
    );
};

export default UpdateProduct;