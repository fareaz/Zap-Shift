import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser ,forgetPassword } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();


    const handleLogin = (data) => {
        console.log('form data', data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
    }
     const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      
      return;
    }

  forgetPassword(email)
      .then(() => {
        
      })
      .catch(() => {
       
      });
  };

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center">Welcome back</h3>
            <p className='text-center'>Please Login</p>
            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    {/* email field */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" ref={emailRef} placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                    }

                    {/* password field */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters  or longer </p>
                    }


                    <div>
                  <button
                    type="button"
                    className="link link-hover block font-semibold text-emerald-900"
                    onClick={handleForgetPassword}
                  >
                    Forgot password?
                  </button>
                </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>New to Zap Shift <Link
                    state={location.state}
                    className='text-blue-400 underline'
                    to="/register">Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;