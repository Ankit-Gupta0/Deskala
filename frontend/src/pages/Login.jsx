import { useState } from 'react'
// import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
      const { email, password } = formData
    
    //   const navigate = useNavigate()

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
          password,
        }
      }
    

  return (
    <>
      <section className='heading'>
        <h3>
           Login
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
              placeholder='Enter your email'
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
              placeholder='Enter password'
              onChange={onChange}
            />
            <div className="validation">
                Minimum 8 Alpha numeric
            </div>
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login