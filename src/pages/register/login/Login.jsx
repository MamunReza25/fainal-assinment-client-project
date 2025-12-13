import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { saveOrUpdateUsers } from '../../utilities';

const Login = () => {
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data
        signInUser(email, password)

            .then(result => {
                saveOrUpdateUsers({ name: data.displayName, email, image: data.imageURL });
                console.log(result.user)
                toast.success("Login succesfuly")
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Login failed..try again")

            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email"  {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email address"
                                }
                            })} />
                            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password"  {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;