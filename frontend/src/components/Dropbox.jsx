import { useState } from 'react'
import { MenuItem, FormControl, Select } from '@mui/material'

const Dropbox = () => {
  const [result, setResult] = useState('shortlist')

  const handleChange = (event) => {
    setResult(event.target.value)
  }

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={result}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'shortlist'}>Shortlist</MenuItem>
          <MenuItem value={'rejected'}>Rejected</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default Dropbox
