import React from 'react';


const EmployeeRegister = () => {





    return (
        <div className='flex justify-center items-center flex-col h-screen w-full'>
            <div className='py-1 md:py-5'>

                <h1 className='header'>Create an employee account</h1>
                <p className='des'>Join AssetVerse to manage, track, and secure your company’s assets with confidence</p>
            </div>
            {/* register form */}
            <form className="fieldset bg-base-200 border-base-300 rounded-box py-4  w-full md:w-170 px-10 ">
                <fieldset className="fieldset">
                    <div className='flex gap-5'>
                        {/* name field */}
                        <div className='flex-1 text-left'>
                            <label className="label py-1 ">Name</label>
                            <input type="email" className="input  w-full" placeholder="Name" />
                        </div>
                        {/* date field */}
                        <div className='flex-1 text-left'>
                            <label className="label  py-1"> Date-Of-Birth</label>
                            <input type="date" className="input " placeholder="Pick a date in 2025"
                                min="2025-01-01" max="250000-12-31"
                                title="Must be valid URL" />


                        </div>
                    </div>
                    {/* email field */}
                    <label className="label">Email</label>
                    <input type="email" className="input   w-full" placeholder="Email" />



                    {/* password field */}
                    <label className="label">PassWord</label>
                    <input type="password" className="input  w-full" placeholder="Password" />



                    {/* Image url field */}
                    <label className="label">Image</label>
                    <input type="file" className="input  w-full" placeholder="Password" />



                </fieldset>


                {/* button field */}
                <div className='flex flex-col gap-5'>

                    <button
                        class="inline-block px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg transform transition duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-200 active:translate-y-0"
                        aria-label="Create HR Account">
                        Register Employeer Account
                    </button>
                    <button type="reset"
                        class="inline-block px-5 py-3 rounded-xl font-semibold text-white bg-gray-500 shadow-lg transform transition duration-200 hover:-translate-y-1 hover:scale-102 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-200 active:translate-y-0"
                        aria-label="Create HR Account">
                        Reset
                    </button>

                </div>

            </form>
        </div>
    );
};

export default EmployeeRegister;