import { useForm } from "react-hook-form";
import { AtSign, LockKeyhole, Eye, EyeOff, User, ImageUp } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegister = (data) => {
    const name = data.userName;
    const email = data.userEmail;
    const photoURL = data.userPhotoURL;
    const password = data.userPassword;
    console.log(name, email, photoURL, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(name, photoURL)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className='py-20 flex justify-center px-2'>
      <div className='border border-colorPrimary rounded-3xl w-full md:w-3/4 lg:w-[35%] px-7 py-6 md:px-14 md:py-12'>
        <h3 className='text-3xl font-bold text-colorTertiary text-center mb-10'>
          Register
        </h3>
        <form onSubmit={handleSubmit(handleRegister)}>
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
                placeholder='Name'
                {...register("userName")}
                required
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
                className='w-full px-4 focus:outline-none text-base font-normal text-colorSecondary'
                placeholder='Email Address'
                {...register("userEmail")}
                required
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
                placeholder='Photo URL'
                {...register("userPhotoURL")}
                required
              />
            </div>
          </div>
          <div>
            <label
              className='text-base font-normal text-colorSecondary'
              htmlFor='password'>
              Password
            </label>
            <div className='mt-2 flex items-center border-b-2 border-[#d9d9d9] py-2'>
              <div className='text-[#ADADAD]'>
                <LockKeyhole width={20} height={20} />
              </div>
              <input
                id='password'
                type={show ? "text" : "password"}
                className='w-full px-4 focus:outline-none text-base font-normal text-colorSecondary'
                placeholder='Password'
                {...register("userPassword")}
                required
              />
              <div
                onClick={() => {
                  setShow(!show);
                }}
                className='cursor-pointer text-colorSecondary'>
                {show ? (
                  <EyeOff width={20} height={20} />
                ) : (
                  <Eye width={20} height={20} />
                )}
              </div>
            </div>
          </div>
          <input
            className='block w-full mt-6 bg-colorPrimary text-[#fff] font-medium text-lg py-3 rounded-full cursor-pointer'
            type='submit'
            value='Register'
          />
          <p className='text-center text-sm text-colorSecondary font-normal mt-4'>
            Already have an account?{" "}
            <Link className='text-colorPrimary' to='/login'>
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
