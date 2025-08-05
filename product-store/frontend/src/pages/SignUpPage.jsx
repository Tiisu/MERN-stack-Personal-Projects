import {
  Eye,
  EyeOff,
  Image,
  Loader,
  Lock,
  LucideLoader,
  MessageSquareIcon,
  MessagesSquareIcon,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthSkeleton from "../components/AuthSkeleton";
import useAuthHook from "../hooks/useAuthhook";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  // const [signUp, setSignUp] = useAuthHook();
  const { signUp, setsignUp } = useAuthHook();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    avatarUrl: "",
  });

  const handleUserDataSubmit = (e) => {
    e.preventDefault();
    signUp(userData);
    
  }

  // console.log(userData.username);

  // Define isSigningUp if needed, for now set to false or implement logic as required
  const isSigningUp = false;

  if (isSigningUp) {
    return (
      <div>
        <div>
          <Loader className="animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen items-center">
      <div className="grid md:grid-cols-2">
        <div className="w-full flex flex-col items-center">
          <MessagesSquareIcon />
          <h2>Welcome</h2>
          <p>Create a new account</p>

          <form className="w-full relative p-8 space-y-4">
            <div className="relative flex w-full items-center">
              <User className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="username" className="w-full">
                <input
                  type="text"
                  id="username"
                  placeholder="sahadev"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.username}
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
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
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </label>
            </div>

            <div className="relative flex w-full items-center">
              <Lock className="absolute insert-y-0 left-0 ml-1 size-5 opacity-30" />
              <label htmlFor="email" className="w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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
              <label htmlFor="email" className="w-full">
                <input
                  type="url"
                  id="url"
                  placeholder="Enter your avatar url"
                  className="border rounded p-1 w-full border-gray-500/45 pl-7"
                  value={userData.avatarUrl}
                  onChange={(e) => setUserData({ ...userData, avatarUrl: e.target.value })}
                />
              </label>
            </div>

            <div>
              <button type="submit" className="w-full p-3 bg-green-800 text-gray-300 rounded" onClick={handleUserDataSubmit}>
                Create an account
                {/* <Loader className={`${isSigningUp} ? animate-spin`} /> */}
              </button>
            </div>
          </form>
          <div className="flex flex-wrap items-center space-x-2">
            <p>Have an account?</p>
            <Link to="/signin" className="underline cursor-pointer">
            Sign In
            </Link>
           </div>
        </div>
        <div className="w-full">
          <AuthSkeleton title={"Welcome to HackChat"} text={"Join our community of hackers to learn how to build the next web"}/>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;