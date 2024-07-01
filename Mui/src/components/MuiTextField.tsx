import { TextField, Stack } from "@mui/material";

export default function MuiTextfield()
{
    return(
        <Stack spacing = {2} direction = "row">
            <TextField label= "Name" variant = "filled"/>
            <TextField label= "Name" variant = "standard"/>
            <TextField label= "Name" variant = "outlined"/>
        </Stack>
    )
}