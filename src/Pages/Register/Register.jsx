import { useForm } from "react-hook-form";
import { AtSign, LockKeyhole, Eye, EyeOff, User, ImageUp } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [show, setShow] = useState(false);
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Register";
  });

  const handleRegister = (data) => {
    const name = data.userName;
    const email = data.userEmail;
    const photoURL = data.userPhotoURL;
    const password = data.userPassword;
    console.log(name, email, photoURL, password);

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setError(
        "Password should have a uppercase and a lowercase and also minimum 6 character!"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        toast.success("Logged in successfully!");
        setError("");
        console.log(result.user);
        updateUser(name, photoURL)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            toast.error(error.message);
          });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
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
                {...register("userName", { required: true })}
              />
            </div>
            {errors.userName?.type === "required" && (
              <span className='text-[#de463b]'>Name is required!</span>
            )}
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
                {...register("userEmail", { required: true })}
              />
            </div>
            {errors.userEmail?.type === "required" && (
              <span className='text-[#de463b]'>Email is required!</span>
            )}
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
                {...register("userPhotoURL", { required: true })}
              />
            </div>
            {errors.userPhotoURL?.type === "required" && (
              <span className='text-[#de463b]'>Photo URL is required!</span>
            )}
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
                {...register("userPassword", { required: true })}
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
            {
              <div className='text-[#de463b] text-sm font-normal mt-2'>
                {error}
              </div>
            }
            {errors.userPassword?.type === "required" && (
              <span className='text-[#de463b]'>Password is required!</span>
            )}
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
