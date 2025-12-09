import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { imageUpload } from '../../utilities';
import LoaddingSpinnar from '../../home/shared/loaddingspinnar/LoaddingSpinnar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';



const EmployeeRegister = () => {
    const { registerUser, loading, signInGoogle } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();


    const handleEmployeerRegister = async (data) => {
        try {
            const { name, image, email, password } = data;
            const imageFile = image[0];

            console.log("Form Data:", data);

            const imageURL = await imageUpload(imageFile);
            console.log("Uploaded Image URL:", imageURL);

            const result = await registerUser(email, password);
            console.log("Registered User:", result.user);


            toast.success("account create succesfully")
            navigate('/')

        } catch (error) {
            console.log("Register Error:", error.message);
            toast.error("account create failled")
        }
    };

    // googole sinup
    const handleGoogleSinUp = () => {
        signInGoogle()
            .then(res => {
                console.log(res)
                toast.success("account create succesfully")
                navigate("/")
            })
            .catch(error => {
                console.log(error)
                toast.error("account create failled")

            })
    }


    return (
        <div className='flex justify-center items-center flex-col h-screen w-full'>
            <div className='py-1 md:py-5'>

                <h1 className='header'>Create an employee account</h1>
                <p className='des'>Join AssetVerse to manage, track, and secure your companys assets with confidence</p>
            </div>
            {/* register form */}
            <form onSubmit={handleSubmit(handleEmployeerRegister)} className="fieldset bg-base-200 border-base-300 rounded-box py-4  w-full md:w-170 px-10 ">
                <fieldset className="fieldset">
                    <div className='flex gap-5'>
                        {/* name field */}
                        <div className='flex-1 text-left'>
                            <label className="label py-1 ">Name</label>
                            <input type="text" className="input  w-full" placeholder="Name" {...register("name", { required: "Name is required,please enter your name?" })} />
                            {errors.name?.type === "required" && <p className='text-[16px] text-red-500 font-medium p-2 text-left'>{errors.name.message}</p>}

                        </div>
                        {/* date field */}
                        <div className='flex-1 text-left'>
                            <label className="label  py-1"> Date-Of-Birth</label>
                            <input type="date" className="input " placeholder="Pick a date in 2025"
                                min="1900-01-01" max={new Date().toISOString().split("T")[0]}
                                title="Must be valid URL" {...register("date", { required: "Must be enter your date?" })} />
                            {errors.date?.type === "required" && <p className='text-[16px] text-red-500 font-medium p-2 text-left'>{errors.date.message}</p>}

                        </div>
                    </div>
                    {/* email field */}
                    <label className="label">Email</label>
                    <input type="email" className="input   w-full" placeholder="Email" {...register("email", { required: "Must be enter your email" })} />
                    {errors.email?.type === "required" && <p className='text-[16px] text-red-500 font-medium p-2 text-left'>{errors.email.message}</p>}


                    {/* password field */}
                    <label className="label">PassWord</label>
                    <input type="password" className="input  w-full" placeholder="Password"  {
                        ...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })
                    }
                    />
                    {
                        errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )
                    }


                    {/* Image url field */}
                    <label className="label">Image</label>
                    <input type="file" className="input  w-full" placeholder="image"  {...register("image", { required: "Must be enter your Image" })} />
                    {errors.image?.type === "required" && <p className='text-[16px] text-red-500 font-medium text-left'>{errors.image.message}</p>}



                </fieldset>


                {/* button field */}
                <div className='flex flex-col gap-5'>

                    <button type='submit'
                        disabled={loading}
                        className="inline-block px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg transform transition duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-200 active:translate-y-0"
                        aria-label="Create HR Account">

                        {loading ? "Creating Employeer Account..." : " Register Employeer Account"}
                    </button>
                    <div>or</div>
                    <button type="submit" onClick={handleGoogleSinUp}
                        className="inline-block px-5 py-3 rounded-xl font-semibold text-white bg-gray-500 shadow-lg transform transition duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-200 active:translate-y-0"
                        aria-label="Create HR Account">
                        Ceate an Google
                    </button>

                </div>

            </form>
        </div>
    );
};

export default EmployeeRegister;