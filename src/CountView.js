import React, { useContext, useState } from 'react'
import ValueContext from './ValueContext'
import { Button, TextField } from '@mui/material'

export default function CountView() {
  const { count, setCount } = useContext(ValueContext)
  const [value, setValue] = useState(0)

  const CountIncrease = () => {
    setCount(c => c + 1);
  };
   //const {count} = useContext(ValueContext)
  return (
    <div>
      <TextField label="Outlined" variant="outlined"
        onChange={(e) => setValue(e.target.value)} />
      <TextField label="Outlined" variant="outlined" />
      <Button variant='contained' color="success" onClick={CountIncrease}>Increase</Button>
      <Button variant='outlined' onClick={CountIncrease}>Increase</Button>

      <p>{count}</p>
      <p>{value}</p>
    </div>
  )
}
