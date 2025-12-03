import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    useTitle('Register');
    const { createUser, setUserInfo, signInWithGoogle, setLoading } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // Password validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }

        createUser(email, password)
            .then(() => {
                setUserInfo(name, photoURL)
                    .then(() => {
                        toast.success('Registration successful!');
                        navigate('/');
                    })
                    .catch(error => toast.error(error.message));
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Google sign-in successful!');
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">Join the ToyTopia family and start exploring a magical world of toys. It's quick and easy!</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label mb-2"><span className="label-text">Name</span></label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-2"><span className="label-text">Email</span></label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label mb-2"><span className="label-text">Photo URL</span></label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label mb-2"><span className="label-text">Password</span></label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <span className="absolute top-10.5 right-8 z-10 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-green-400 border-0 hover:text-green-400 hover:bg-black">Register</button>
                        </div>
                    </form>
                     <div className="divider px-8">OR</div>
                    <div className="card-body pt-0">

                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign up with Google
                        </button>
                        
                        <p className="text-center mt-4">Already have an account? <Link to="/login" className="link link-primary">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;