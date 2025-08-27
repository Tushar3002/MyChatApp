import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h2 className='text-3xl font-semibold text-gray-300 text-center'>Login
            <span className='text-blue-500'>Chat App</span>
            </h2>
            <form action="">
                <div>
                    <label className="label p-2" htmlFor="">
                        <span className='text-base label-text'>Username </span>

                    </label>
                    <input type="text" placeholder='Enter User name' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password </span>
                    </label>
                    <input type="password" placeholder='Enter the password' className='w-full input input-bordered h-10' />
                    
                </div>
                <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account? Sign Up
                </Link> {/* its from react-router-dom */}
                <div>
                    <button className='btn btn-block btn-sm mt-2'>
                    Login
                </button>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default Login


//Starter Code
// function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h2 className='text-3xl font-semibold text-gray-300 text-center'>Login
//             <span className='text-blue-500'>Chat App</span>
//             </h2>
//             <form action="">
//                 <div>
//                     <label className="label p-2" htmlFor="">
//                         <span className='text-base label-text'>Username </span>

//                     </label>
//                     <input type="text" placeholder='Enter User name' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password </span>
//                     </label>
//                     <input type="password" placeholder='Enter the password' className='w-full input input-bordered h-10' />
//                 </div>
//                 <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Don't have an account? Sign Up
//                 </a>
//                 <button className='btn btn-block btn-sm mt-2'>
//                     Login
//                 </button>
//             </form>

//         </div>
      
//     </div>
//   )
// }

// export default Login
