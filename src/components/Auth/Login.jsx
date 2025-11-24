import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-white p-20'>

          
            <div className="mb-6 text-white text-sm 
                bg-white/10 backdrop-blur-lg 
                border border-white/20 rounded-xl 
                p-5 shadow-lg">

  <p className="font-semibold text-lg mb-3 flex items-center gap-2">
    <span className=" rounded-full animate-ping">@</span>
    Demo Login Credentials
  </p>

 
  <div className="mb-4">
    <p className="font-medium text-emerald-300 text-base">Admin</p>
    <div className="ml-2 mt-1 space-y-1">
      <p>Email: <span className="text-gray-200">admin@me.com</span></p>
      <p>Password: <span className="text-gray-200">123</span></p>
    </div>
  </div>

 
  <div className="mb-3">
    <p className="font-medium text-emerald-300 text-base">Employee 1</p>
    <div className="ml-2 mt-1 space-y-1">
      <p>Email: <span className="text-gray-200">e@e.com</span></p>
      <p>Password: <span className="text-gray-200">123</span></p>
    </div>
  </div>

 
  <div>
    <p className="font-medium text-emerald-300 text-base">Employee 2</p>
    <div className="ml-2 mt-1 space-y-1">
      <p>Email: <span className="text-gray-200">employee2@example.com</span></p>
      <p>Password: <span className="text-gray-200">123</span></p>
    </div>
  </div>

</div>

            

            <form 
                onSubmit={submitHandler}
                className='flex flex-col items-center justify-center'
            >
                <input 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required 
                    className='outline-none bg-transparent border-2 border-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' 
                    type="email" 
                    placeholder='Enter your email' 
                />

                <input
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required 
                    className='outline-none bg-transparent border-2 border-white font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' 
                    type="password" 
                    placeholder='Enter password' 
                />

                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
                    Log in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
