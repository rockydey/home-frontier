import { useForm } from "react-hook-form";
import { AtSign, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className='py-20 flex justify-center px-2'>
      <div className='border border-colorPrimary rounded-3xl w-full md:w-3/4 lg:w-[35%] px-7 py-6 md:px-14 md:py-12'>
        <h3 className='text-3xl font-bold text-colorTertiary text-center mb-10'>
          Login
        </h3>
        <form onSubmit={handleSubmit(handleLogin)}>
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
                placeholder='Your Email'
                {...register("userEmail")}
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
            <div className='mt-2 flex items-center border-b-2 border-[#d9d9d9] py-2 mb-1'>
              <div className='text-[#ADADAD]'>
                <LockKeyhole width={20} height={20} />
              </div>
              <input
                id='password'
                type={show ? "text" : "password"}
                className='w-full px-4 focus:outline-none text-base font-normal text-colorSecondary'
                placeholder='Your Password'
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
          <p className='text-right underline text-sm font-normal text-colorSecondary'>
            <Link>Forget Password</Link>
          </p>
          <input
            className='block w-full mt-6 bg-colorPrimary text-[#fff] font-medium text-lg py-3 rounded-full cursor-pointer'
            type='submit'
            value='Login'
          />
          <p className='text-center text-sm text-colorSecondary font-normal mt-4'>
            Do not have any account?{" "}
            <Link className='text-colorPrimary' to='/register'>
              Register Now
            </Link>
          </p>
          <div className='divider my-10 text-colorSecondary text-lg font-normal'>
            OR
          </div>
          <div className='flex items-center justify-center gap-5'>
            <div
              className='tooltip tooltip-info w-14 h-14 rounded-full flex items-center justify-center text-[#fff] bg-[#1da1f2] text-2xl cursor-pointer'
              data-tip='Login with twitter'>
              <FaTwitter />
            </div>
            <div
              className='tooltip tooltip-error w-14 h-14 rounded-full flex items-center justify-center text-[#fff] bg-[#ea4335] text-2xl cursor-pointer'
              data-tip='Login with google'>
              <FaGoogle />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
