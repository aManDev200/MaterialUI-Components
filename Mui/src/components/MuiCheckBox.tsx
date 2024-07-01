import { Box , FormControlLabel , Checkbox } from "@mui/material";
import  { useState } from 'react';

export default function MuiCheckBox()
{
    const [acceptTnC , setacceptTnC] = useState(false);
    console.log({ acceptTnC })
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setacceptTnC(event.target.checked);
    }
    return(
        <Box>
            <Box>
                <FormControlLabel label = " I accept terms and conditions" control = {<Checkbox  checked = {acceptTnC} onChange={handleChange}/>} />
            </Box>
        </Box>
    )
}