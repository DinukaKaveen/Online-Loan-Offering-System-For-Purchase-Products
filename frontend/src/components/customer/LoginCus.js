import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useCookies  } from "react-cookie";

export default function LoginCus() {
  //const [cookies, setCookie] = useCookies(['access-token']);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user_login", {
        email,
        password,
      });

      if (response.data.success) {
        
        //setCookie('access-token', response.data.access_token, { path: '/' });
        sessionStorage.setItem("user_id", response.data.user_id);
        window.location.href = "/home";

      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "Network error";
      setMessage(errorMessage);
    }
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold leading-none tracking-tight text-gray-700">
              Sign in to your account
            </h2>
          </div>

          <div>{message}</div>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-6"
            action="/"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            New to Bumble Bee?&nbsp;
            <Link
              to={"/RegisterCustomer"}
              className="font-medium text-blue-600 hover:text-blue-700 underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
