import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-toastify';

const MyProfile = () => {
  useTitle('My Profile');
    // We only need user and setUserInfo now
    const { user, setUserInfo } = useContext(AuthContext); 

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        setUserInfo(name, photoURL)
            .then(() => {
                // Loader automatically closed by setUserInfo's .finally()
                toast.success('Profile updated successfully! 🎉');
            })
            .catch(error => {
                // Loader automatically closed by setUserInfo's .finally()
                toast.error(error.message);
            });
    };

    return (
        <div className="container mx-auto my-12 p-4">
            <h1 className="text-4xl font-bold text-center mb-10">My Profile</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                
                <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={user?.photoURL} alt={user?.displayName} className="rounded w-32 h-32 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold capitalize">{user?.displayName}</h2>
                        <p className='font-semibold'>{user?.email}</p>
                    </div>
                </div>

                
                <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                     <form onSubmit={handleUpdateProfile} className="card-body">
                        <h2 className="card-title justify-center">Update Profile</h2>
                        <div className="form-control">
                            <label className="label"><span className="label-text mb-2">Name</span></label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text mb-2">Photo URL</span></label>
                            <input type="text" name="photoURL" defaultValue={user?.photoURL} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn px-10 bg-green-400 border-0 hover:text-green-400 hover:bg-black">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;