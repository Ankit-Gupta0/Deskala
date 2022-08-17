import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateCandidate,
} from '../features/candidates/candidateSlice'
import { MenuItem, FormControl, Select } from '@mui/material'
import State from './State'
import { FiEdit2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


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

const CandidateEditForm = ({ index }) => {
  console.log(index)
  const navigate = useNavigate()


  const { candidates, isLoading, isError, message } = useSelector(
    (state) => state.candidates
  )

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  useEffect(() => {
     console.log(candidates)
  }, [])
  
  //  console.log(oneCandidate)

  // handling form
  const [formData, setFormData] = useState({
    id: String(candidates[index]._id),
    name: candidates[index].name,
    dob: new Date(candidates[index].dob).toISOString().substring(0,10),
    email: candidates[index].email,
    address: candidates[index].address,
    state: candidates[index].state,
    pincode: candidates[index].pincode,
  })

  console.log(String(candidates[index]._id))
  const { name, dob, email, address, state, pincode } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(updateCandidate( formData ));
    setFormData({
      name: '',
      dob: '',
      email: '',
      address: '',
      state: '',
      pincode: '',
    })
    // navigate('/')
  }

  return (
    <div>
      <button className='dashboard__button' onClick={handleOpen}>
        {<FiEdit2 />}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='container'>
          <Box sx={style}>
            <section className='form'>
              <section>
                <h3 className='candidate__heading'>Update Candidate</h3>
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
                          {State.map((s, id) => (
                            <MenuItem
                              className='menui'
                              key={id}
                              value={s.value}
                            >
                              {s.name}
                            </MenuItem>
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
                  <button
                    type='submit'
                    className='candidate__btn btn-reverse'
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='candidate__btn candidate__btn-block'
                  >
                    Update
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

export default CandidateEditForm
