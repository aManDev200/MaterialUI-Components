import { useState } from 'react';
import  {Stack, Rating} from '@mui/material'

export default function MuiRating()
{
    const[rating, setrating] = useState<number | null>(null)
    console.log({rating, setrating})
    const handleChange = (_event : React.ChangeEvent<{}>, newvalue : number | null)=>{
        setrating(newvalue)
    }
    return (
        <Stack spacing = {2}>
            <Rating value = {rating} onChange = {handleChange}  precision={0.5} size = "large" />
        </Stack>
    )
}