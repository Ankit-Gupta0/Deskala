import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { FaUser } from 'react-icons/fa'


const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
      })
    
      const { email,phone, password } = formData
    
      const navigate = useNavigate()
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
          const userData = {
            email,
            phone,
            password,
          }
    
      }
      
    
    
      return (
        <>
          <section className='heading'>
            <h3>
              Sign Up
            </h3>
          </section>
    
          <section className='form'>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email id</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='enter your email id'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
                <input
                  type='number'
                  className='form-control'
                  id='phone'
                  name='phone'
                  value={phone}
                  placeholder='enter your phone number'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='enter password'
                  onChange={onChange}
                />
                <div className="validation">
                    Minimum 8 Alpha numeric
                </div>
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                  Sign Up
                </button>
              </div>
            </form>
          </section>
        </>
      )
}

export default Signup