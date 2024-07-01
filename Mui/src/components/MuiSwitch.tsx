import { Box , FormControlLabel, Switch } from "@mui/material";
import { useState } from 'react'

export default function MuiSwitch()
{
    const [checked, setchecked] = useState(false)
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>)=>
    {
        setchecked(event.target.checked)
    }
    return(
        <Box>
            <FormControlLabel label = "Dark Mode"  control = {<Switch checked = {checked} onChange = {handleChange} />} />
        </Box>
    )
}