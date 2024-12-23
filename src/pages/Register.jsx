import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values)
            if(response.status === 201) {
                navigate('/login')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
  return (


    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-white">
      <div className="row w-100" style={{ maxWidth: "1200px"}}>
        {/* Left Section: Image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            src="./image/login.jpg" // Replace with the correct image path
            alt="Travel illustration"
            className="img-fluid"
          />
        </div>

        {/* Right Section: Form */}
        <div className="col-md-6  p-4">
          <h2 className="fw-bold mb-3">Create account</h2>
          <p className="text-muted mb-4">For business, band or celebrity.</p>
          <form>
            <div className="row">
              <div className="col-6 mb-3">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreePolicy"
              />
              <label className="form-check-label" htmlFor="agreePolicy">
                I agree to all the <a href="#!" className="text-decoration-none">Terms</a> and <a href="#!" className="text-decoration-none">Privacy policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Create account
            </button>

            {/* Link to Login */}
            <div className="text-center pt-4">
                <span>Already have account?</span>
                <Link to='/login' className='text-blue-500 ps-3'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className='flex justify-center items-center h-screen'>
    //     <div className='shadow-lg px-8 py-5 border w-72'>
    //         <h2 className='text-lg font-bold mb-4'>Register</h2>
    //         <form onSubmit={handleSumbit}>
    //             <div className="mb-4">
    //                 <label htmlFor="username" className='block text-gray-700'>Username</label>
    //                 <input type="text" placeholder='Enter Username' className='w-full px-3 py-2 border'
    //                 name="username" onChange={handleChanges}/>
    //             </div>
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
    //             <span>Already have account?</span>
    //             <Link to='/login' className='text-blue-500'>Login</Link>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Register