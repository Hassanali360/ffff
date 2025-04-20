import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_BASE}/api/users`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Error fetching users:', err));
  }, [API_BASE]);

  const onSubmit = async (data) => {
    const endpoint = isSignup ? 'signup' : 'login';

    try {
      const res = await fetch(`${API_BASE}/user/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || 'Something went wrong');
        return;
      }

      if (isSignup) {
        alert('Signup successful! Now login.');
        setIsSignup(false);
        reset();
      } else {
        alert('Login successful!');

        // Send login alert email to owner
        await fetch(`${API_BASE}/api/send-login-alert`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: result.user?.fullname || data.fullname || 'N/A',
            email: result.user?.email || data.email,
            loginTime: new Date().toLocaleString(),
          }),
        });

        // Optional: Save token or redirect
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center px-4">
      <div className="rounded shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                {...register('fullname', { required: 'Full name is required' })}
                className="w-full border rounded px-3 py-2 mt-1"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full border rounded px-3 py-2 mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full border rounded px-3 py-2 mt-1"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-heroBg hover:bg-white hover:text-black hover:font-bold"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              reset();
            }}
            className="text-blue-600 hover:underline"
          >
            {isSignup ? 'Login here' : 'Sign up here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
