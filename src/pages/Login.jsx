import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/login', values)
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token)
                navigate('/')
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        >
          <div className="row">
            {/* Illustration Section */}
            <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
              <img
                src="./image/login.jpg" // Replace with the correct image path
                alt="Travel illustration"
                className="img-fluid"
              />
            </div>
  
            {/* Login Form Section */}
            <div className="col-lg-6 p-4">
              <h2 className="mb-3">Login</h2>
              <p className="text-muted mb-4">
                Today is a new day. It's your day. You shape it.
                <br />
                Sign in to start managing your projects.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Example@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <a href="#" className="text-decoration-none">
                    Forgot Password?
                  </a>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Login
                </button>
              </form>
              <div className="d-flex align-items-center my-3">
                <div className="flex-grow-1 border-top"></div>
                <span className="mx-2 text-muted">Or</span>
                <div className="flex-grow-1 border-top"></div>
              </div>
              <div className="d-grid gap-2 my-4">
                <button className="btn btn-outline-danger">
                  <i className="bi bi-google"></i> Sign in with Google
                </button>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-facebook"></i> Sign in with Facebook
                </button>
              </div>
              <div className="text-center">
                <span>Don't Have an Account?</span>
                <Link to="/register" className="text-blue-500 ps-3">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

// <div className='flex justify-center items-center h-screen'>
//     <div className='shadow-lg px-8 py-5 border w-72'>
//         <h2 className='text-lg font-bold mb-4'>Login</h2>
//         <form onSubmit={handleSumbit}>
//             <div className="mb-4">
//                 <label htmlFor="email" className='block text-gray-700'>Email</label>
//                 <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'
//                 name="email" onChange={handleChanges}/>
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="password" className='block text-gray-700'>Password</label>
//                 <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'
//                 name="password" onChange={handleChanges}/>
//             </div>
//             <button className="w-full bg-green-600 text-white py-2 ">Submit</button>
//         </form>
//         <div className="text-center">
//             <span>Don't Have Account?</span>
//             <Link to='/register' className='text-blue-500'>Signup</Link>
//         </div>
//     </div>
// </div>

export default Login