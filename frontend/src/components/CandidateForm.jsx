import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
// import StateDropbox from './StateDropbox'
import { useDispatch } from 'react-redux'
import { createCandidate } from '../features/candidates/candidateSlice'
import { MenuItem, FormControl, Select } from '@mui/material'
import State from './State'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const CandidateForm = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()

  // handling form
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    address: '',
    state: '',
    pincode: '',
  })

  const { name, dob, email, address, state, pincode } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // const userData = {
    //   name,
    //   dob,
    //   email,
    //   address,
    //   state,
    //   pincode,
    // }
    dispatch(createCandidate({ formData }))
    setFormData({
      name: '',
      dob: '',
      email: '',
      address: '',
      state: '',
      pincode: '',
    })
  }

  return (
    <div>
      <button className='newCandidate' onClick={handleOpen}>
        + Add new candidate
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className="container">
          <Box sx={style}>
            

            <section className='form'>
              <section>
                <h3 className='candidate__heading'>Create Candidate</h3>
              </section>
              <form onSubmit={onSubmit}>
                <div className='columns'>
                  <div className='column'>
                    <div className='candidate__form-group'>
                      <label htmlFor='name'>Name</label>
                      <input
                        type='text'
                        className='candidate__form-control'
                        id='name'
                        name='name'
                        value={name}
                        placeholder='enter your name'
                        onChange={onChange}
                      />
                    </div>
                    <div className='candidate__form-group'>
                      <label htmlFor='dob'>Date of Birth</label>
                      <input
                        type='date'
                        className='candidate__form-control'
                        id='dob'
                        name='dob'
                        value={dob}
                        placeholder='enter your Date of Birth'
                        onChange={onChange}
                      />
                    </div>
                    <div className='candidate__form-group'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        className='candidate__form-control'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='enter your email'
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className='column'>
                    <div className='candidate__form-group'>
                      <label htmlFor='address'>Address</label>
                      <input
                        type='text'
                        className='candidate__form-control'
                        id='address'
                        name='address'
                        value={address}
                        placeholder='enter your address'
                        onChange={onChange}
                      />
                    </div>
                    <div className='candidate__form-group'>
                      <label htmlFor='state'>State</label>
                        <FormControl className='candidate__form-group'>
                          <Select
                            className='candidate__form-control state__select'
                            name='state'
                            value={state}
                            onChange={onChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                              {State.map((s,id) => (
                                  <MenuItem className='menui' key={id} value={s.value}>{s.name}</MenuItem>
                              ))}
                          </Select>
                      </FormControl>
                    </div>
                    <div className='candidate__form-group'>
                      <label htmlFor='pindode'>Pin Code</label>
                      <input
                        type='number'
                        className='candidate__form-control'
                        id='pincode'
                        name='pincode'
                        value={pincode}
                        placeholder='enter your 6-digit pin code'
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='candidate__button'>
                  <button type='submit' className='candidate__btn btn-reverse' onClick={handleClose}>
                    Cancel
                  </button>
                  <button type='submit' className='candidate__btn candidate__btn-block'>
                    Create
                  </button>
                </div>
              </form>
            </section>
          </Box>
        </div>
      </Modal>
    </div>
  )
}

export default CandidateForm
