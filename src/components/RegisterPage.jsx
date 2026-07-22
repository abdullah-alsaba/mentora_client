'use client';

import { Button, Input } from '@heroui/react';

import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default  function Register() {

  
  const handelSignUp = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const user =  Object.fromEntries(formData.entries())
    
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
      callbackURL: "/",

    });
    console.log(data,error)

}




    return (
      <div className="min-h-[80vh] flex flex-col bg-slate-50 py-12">
        <div className="grow flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

              <div className="text-center space-y-2 relative">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Join <span className="text-blue-600">Mentora</span>
                </h2>
                <p className="text-slate-500 font-medium">
                  Create your account to start learning
                </p>
              </div>

              <form onSubmit={handelSignUp} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full h-14 pl-12 pr-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name='email'
                      placeholder="Enter your email"
                      className="w-full h-14 pl-12 pr-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="image"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Profile Image URL
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                    <input
                      id="image"
                      name="image"
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      className="w-full h-14 pl-12 pr-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-bold text-slate-700 ml-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="w-full h-14 pl-12 pr-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <Button
                  color="primary"
                  type="submit"
                  className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
                >
                  Create Account{" "}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="text-center pt-2">
                <p className="text-sm text-slate-500 font-medium">
                  Already have an account?{" "}
                  <Link
                   
                    href="/login"
                    className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
