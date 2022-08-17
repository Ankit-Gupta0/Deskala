import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
      })
    
      const { email, phone, password } = formData
    
      const navigate = useNavigate()
      const dispatch = useDispatch()

      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )

      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
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
    
          dispatch(register(userData))
        
      }
      
      if (isLoading) {
        return <Spinner />
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
                  pattern='^[a-z0-9](\.?[a-z0-9]){3,}@gmail\.com$'
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
                  minLength={10}
                  maxLength={10}
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
                  minLength={5}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$"
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