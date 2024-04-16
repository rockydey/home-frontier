import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { AtSign, User, ImageUp } from "lucide-react";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUser, setLoading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    document.title = "Update Profile";
  });

  const handleUpdateProfile = (data) => {
    const name = data.userName;
    const photoURL = data.userPhotoURL;

    if (name === "" || photoURL === "") {
      toast.error("Please provide both name and photoURL!");
      return;
    }

    updateUser(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className='max-w-screen-xl mx-auto mt-40 px-5 lg:px-0'>
      <div className='w-full md:w-3/4 lg:w-3/5 mx-auto mb-20'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-3xl text-colorTertiary font-bold mb-4'>
              Edit Profile
            </h3>
            <p className='mb-2 text-lg font-normal text-colorSecondary'>
              <span className='text-colorTertiary'>Name:</span>{" "}
              {user?.displayName}
            </p>
            <p className='text-lg font-normal text-colorSecondary'>
              <span className='text-colorTertiary'>Email:</span> {user?.email}
            </p>
          </div>
          <div className=''>
            <img
              src={user?.photoURL}
              className='rounded-full w-20 h-20 ring ring-colorPrimary ring-offset-base-100 ring-offset-2'
              alt=''
            />
          </div>
        </div>
        <div className='divider'></div>
        <div className='w-full md:w-5/6 lg:w-3/4 mx-auto'>
          <form onSubmit={handleSubmit(handleUpdateProfile)}>
            <div>
              <label
                htmlFor='name'
                className='text-base font-normal text-colorSecondary'>
                Name
              </label>
              <div className='mt-2 flex items-center border-b-2 border-[#d9d9d9] py-2 mb-4'>
                <div className='text-[#ADADAD]'>
                  <User width={20} height={20} />
                </div>
                <input
                  id='name'
                  type='text'
                  className='w-full px-4 focus:outline-none text-base font-normal text-colorSecondary'
                  placeholder={`${user?.displayName}`}
                  {...register("userName")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='text-base font-normal text-colorSecondary'>
                Email
              </label>
              <div className='mt-2 flex items-center border-b-2 border-[#d9d9d9] py-2 mb-4'>
                <div className='text-[#ADADAD]'>
                  <AtSign width={20} height={20} />
                </div>
                <input
                  id='email'
                  type='email'
                  defaultValue={user?.email}
                  readOnly
                  className='w-full px-4 focus:outline-none text-base font-normal text-[#ADADAD]'
                  placeholder='Email Address'
                  {...register("userEmail")}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='photoURL'
                className='text-base font-normal text-colorSecondary'>
                Photo URL
              </label>
              <div className='mt-2 flex items-center border-b-2 border-[#d9d9d9] py-2 mb-4'>
                <div className='text-[#ADADAD]'>
                  <ImageUp width={20} height={20} />
                </div>
                <input
                  id='photoURL'
                  type='text'
                  className='w-full px-4 focus:outline-none text-base font-normal text-colorSecondary'
                  placeholder={`${user?.photoURL}`}
                  {...register("userPhotoURL")}
                />
              </div>
            </div>
            <input
              className='block w-full mt-6 bg-colorPrimary text-[#fff] font-medium text-lg py-3 rounded-full cursor-pointer'
              type='submit'
              value='Save'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
