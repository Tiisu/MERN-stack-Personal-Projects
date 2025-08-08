import {
  Eye,
  EyeOff,
  Image,
  Lock,
  MessageSquareIcon,
  MessagesSquareIcon,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthSkeleton from "../components/AuthSkeleton";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 grid md:grid-cols-2 gap-6">
        <div className="w-full flex flex-col items-center">
          <MessagesSquareIcon className="size-6 sm:size-8" />
          <h2 className="text-lg sm:text-xl font-semibold mt-2">Welcome back</h2>
          <p className="text-sm sm:text-base text-gray-400">Sign in to your account</p>

          <form className="w-full relative p-4 sm:p-8 space-y-4 border rounded bg-white/5">
            <div className="relative flex w-full items-center">
              <User className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="username" className="w-full">
                <input
                  type="text"
                  id="username"
                  placeholder="sahadev"
                  className="border rounded p-2 w-full border-gray-500/45 pl-7"
                />
              </label>
            </div>

            <div className="relative flex w-full items-center">
              <MessageSquareIcon className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="email" className="w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="border rounded p-2 w-full border-gray-500/45 pl-7"
                />
              </label>
            </div>

            <div className="relative flex w-full items-center">
              <Lock className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="password" className="w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••"
                  className="border rounded p-2 w-full border-gray-500/45 pl-7"
                />
              </label>
              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute insert-y-0 right-0 mr-1 size-5 opacity-30"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute insert-y-0 right-0 mr-1 size-5 opacity-30"
                />
              )}
            </div>

            <div className="relative flex w-full items-center">
              <Image className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="url" className="w-full">
                <input
                  type="url"
                  id="url"
                  placeholder="Enter your avatar url"
                  className="border rounded p-2 w-full border-gray-500/45 pl-7"
                />
              </label>
            </div>

            <div>
              <button type="submit" className="w-full p-3 bg-green-800 text-gray-300 rounded">
                Sign in
              </button>
            </div>
          </form>
          <div className="flex flex-wrap items-center space-x-2 mt-3">
            <p>New here?</p>
            <Link to="/signup" className="underline cursor-pointer">
            Create an account
            </Link>
           </div>
        </div>
        <div className="w-full hidden md:block">
          <AuthSkeleton title={"Welcome back to HackChat"} text={"We missed you! Sign in to continue learning and building."}/>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;