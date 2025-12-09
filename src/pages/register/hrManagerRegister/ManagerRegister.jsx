import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { imageUpload } from '../../utilities';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ManagerRegister = () => {
    const { registerUser, updateUserProfile, signInGoogle, loading } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleManagerRegister = async (data) => {
        try {
            const { name, date, companyName, email, password, image } = data;

            // 1. Image Upload
            const imageFile = image[0];
            const imageURL = await imageUpload(imageFile);

            // 2. Create user in Firebase
            const result = await registerUser(email, password);

            // 3. Update Firebase Profile
            await updateUserProfile({
                displayName: name,
                photoURL: imageURL,
            });

            toast.success("Account created successfully!");
            navigate('/');

        } catch (error) {
            console.log("Register Error:", error.message);
            toast.error("Something went wrong!");
        }
    };

    // Google Login
    const handleGoogleLogin = async () => {
        try {
            await signInGoogle();
            toast.success("Login successful!");
            navigate('/');
        } catch (error) {
            toast.error("Google Sign-in failed!");
        }
    };

    return (
        <div className='flex justify-center items-center flex-col h-screen w-full'>
            <div className='py-1 md:py-5'>
                <h1 className='header'>Create an HR Manager account</h1>
                <p className='des'>Join AssetVerse to manage, track, and secure your company’s assets with confidence</p>
            </div>

            <form onSubmit={handleSubmit(handleManagerRegister)} className="fieldset bg-base-200 border-base-300 rounded-box py-4 w-full md:w-170 px-10">
                <fieldset className="fieldset">
                    <div className='flex gap-5'>
                        {/* Full Name */}
                        <div className='flex-1 text-left'>
                            <label className="label py-1">Full Name</label>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Full Name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                        </div>

                        {/* DOB */}
                        <div className='flex-1 text-left'>
                            <label className="label py-1">Date Of Birth</label>
                            <input
                                type="date"
                                className="input w-full"
                                min="1900-01-01"
                                max={new Date().toISOString().split("T")[0]}
                                {...register("date", { required: "Date is required" })}
                            />
                            {errors.date && <p className='text-red-500 text-sm'>{errors.date.message}</p>}
                        </div>
                    </div>

                    {/* Company Name */}
                    <label className="label">Company Name</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Company Name"
                        {...register("companyName", { required: "Company name is required" })}
                    />
                    {errors.companyName && <p className='text-red-500 text-sm'>{errors.companyName.message}</p>}

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input w-full"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    {/* Company Logo */}
                    <label className="label">Company Logo</label>
                    <input
                        type="file"
                        className="input w-full"
                        {...register("image", { required: "Logo is required" })}
                    />
                    {errors.image && <p className='text-red-500 text-sm'>{errors.image.message}</p>}
                </fieldset>

                {/* Buttons */}
                <div className='flex flex-col gap-5'>
                    <button
                        type='submit'
                        disabled={loading}
                        className="inline-block px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg hover:-translate-y-1 transition"
                    >
                        {loading ? "Creating Account..." : "Register Manager Account"}
                    </button>

                    <div className="text-center">Or</div>

                    {/* Google Button — type="button" is FIXED */}
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="inline-block px-5 py-3 rounded-xl font-semibold text-white bg-gray-500 shadow-lg hover:-translate-y-1 transition"
                    >
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ManagerRegister;
