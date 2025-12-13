import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../utilities';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';


const RequestAsset = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = async (data) => {
        try {

            // 1. Image Upload
            const imageFile = data.image[0];
            const imageUrl = await imageUpload(imageFile);


            const assetData = {
                name: data.name,
                image: imageUrl,
                type: data.type,
                quantity: Number(data.quantity),
                dateAdded: new Date().toISOString(),
                create_by: user.email
            };

            const result = await axios.post(`${import.meta.env.VITE_baseURL}/addAsset`, assetData)
            console.log(result)




            toast.success("Asset added successfully!");
            reset();

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    }

    return (
        <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Add New Asset</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Product Name */}
                <div>
                    <label className="font-semibold">Product Name</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">Required</p>}
                </div>

                {/* Product Image */}
                <div>
                    <label className="font-semibold">Product Image</label>
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full"
                        {...register("image", { required: true })}
                    />
                    {errors.image && <p className="text-red-500 text-sm">Image Required</p>}
                </div>

                {/* Product Type Dropdown */}
                <div>
                    <label className="font-semibold">Product Type</label>
                    <select
                        className="select select-bordered w-full"
                        {...register("type", { required: true })}
                    >
                        <option value="">Select type</option>
                        <option value="Returnable">Returnable</option>
                        <option value="Non-returnable">Non-returnable</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm">Required</p>}
                </div>

                {/* Product Quantity */}
                <div>
                    <label className="font-semibold">Product Quantity</label>
                    <input
                        type="number"
                        className="input input-bordered w-full"
                        {...register("quantity", { required: true, min: 1 })}
                    />
                    {errors.quantity && <p className="text-red-500 text-sm">Quantity Required</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">
                    Add Asset
                </button>
            </form>
        </div>
    );
};
export default RequestAsset;