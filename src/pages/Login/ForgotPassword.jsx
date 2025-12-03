import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const ForgotPassword = () => {
    useTitle('Forgot Password');
    const { resetPassword, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const initialEmail = location.state?.email || '';

    const handleResetPassword = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        
        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent! Redirecting to Gmail...');
                setTimeout(() => {
                    window.open("https://mail.google.com","_blank")
                }, 1000);
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleResetPassword} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Reset Password</h1>
                    <p className="text-center text-gray-500">Enter your email to receive a password reset link.</p>
                    <div className="form-control">
                        <label className="label mb-2">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={initialEmail} placeholder="your-email@example.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn  bg-green-400 border-0 hover:text-green-400 hover:bg-black">Send Reset Link</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;