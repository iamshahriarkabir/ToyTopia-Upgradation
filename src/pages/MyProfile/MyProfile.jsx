import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";
import { User, Camera, Mail, Save, Calendar, ShieldCheck } from "lucide-react";

const MyProfile = () => {
  useTitle("My Profile");
  const { user, setUserInfo } = useContext(AuthContext);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    setUserInfo(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully! 🎉");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const joinDate = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Member recently";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* 1. COVER BANNER */}
          <div className="h-48 bg-linear-to-r from-teal-600 to-teal-800 relative">
            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute bottom-4 right-6 text-white/80 text-sm font-medium flex items-center gap-2">
              <ShieldCheck size={16} /> Verified Account
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* 2. SIDEBAR / PROFILE INFO */}
            <div className="md:w-1/3 px-8 pb-8 text-center md:text-left relative">
              {/* Profile Image */}
              <div className="relative -mt-16 mb-6 inline-block">
                <div className="w-32 h-32 rounded-full p-1 bg-white shadow-lg mx-auto md:mx-0">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/sd9jBbLp/user.png"}
                    alt={user?.displayName}
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div
                  className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-white"
                  title="Online"
                ></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                {user?.displayName}
              </h2>
              <p className="text-gray-500 font-medium text-sm mb-6">
                {user?.email}
              </p>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={18} className="text-teal-600" />
                  <span className="text-sm">
                    Joined: <strong>{joinDate}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <ShieldCheck size={18} className="text-teal-600" />
                  <span className="text-sm">
                    Role: <strong>User</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* 3. EDIT FORM AREA */}
            <div className="md:w-2/3 p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-100">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <User className="text-teal-600" size={20} /> Edit Profile
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Update your personal details here.
                </p>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-6">
                {/* Name Input */}
                <div className="form-control space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      placeholder="Your Name"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-medium text-gray-700"
                      required
                    />
                  </div>
                </div>

                {/* Photo URL Input */}
                <div className="form-control space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Profile Picture URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Camera size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="photoURL"
                      defaultValue={user?.photoURL}
                      placeholder="https://example.com/photo.jpg"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-medium text-gray-700"
                      required
                    />
                  </div>
                </div>

                {/* Read-Only Email */}
                <div className="form-control space-y-2 opacity-60">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address{" "}
                    <span className="text-xs font-normal">
                      (Cannot be changed)
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      readOnly
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 cursor-not-allowed font-medium text-gray-500"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="btn bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl border-none shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
                  >
                    <Save size={18} /> Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
