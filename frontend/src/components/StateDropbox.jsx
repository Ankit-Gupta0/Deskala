import { useState } from 'react'
import { MenuItem, FormControl, Select } from '@mui/material'
import State from './State'


const StateDropbox = () => {
    const [state, setState] = useState("")

    const handleChange = (event) => {
        setState(event.target.value)
    }
  return (
    <>
      <FormControl className='candidate__form-group'>
        <Select
          className='candidate__form-control state__select'
          value={state}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
            {State.map((s,id) => (
                <MenuItem className='menui' key={id} value={s.value}>{s.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  )
}

export default StateDropbox