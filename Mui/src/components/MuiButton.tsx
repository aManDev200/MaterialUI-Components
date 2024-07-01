import { Stack ,Button , IconButton, ToggleButton ,ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";
export default function MuiButton()
{
    const [format , setFormat ] = useState<string[]>([])
    function handleFormatChange(_event: React.MouseEvent<HTMLElement>,updatedFormats : string[]) {
        setFormat(updatedFormats)
    }
        return (
        <Stack spacing = {2} direction = {"column"}>
            <Stack  spacing={2} direction={"row"}>
                <Button variant = "text" >Text</Button>
                <Button variant = "contained">Contained</Button>
                <Button variant = "outlined">Outlined</Button>
            </Stack>
            <Stack spacing = {2} direction = {"row"}>
                <Button variant = "contained" color = "error"></Button>
                <Button variant = "contained" color = "primary">Hello </Button>
                <Button variant = "contained" color = "secondary"></Button>
                <Button variant = "contained" color = "warning"></Button>
                <Button variant = "contained" color = "success"></Button>
            </Stack>
            <Stack spacing = {2} direction = {"row"} display = "block">
                <Button variant = "contained" size = "small"></Button>
                <Button variant = "contained" size = "large">Hello</Button>
            </Stack>
            <Stack spacing = {2} direction = {"row"} >
                <Button variant = "contained" endIcon = {<SendIcon/>} onClick={()=>{alert('CLICKED')}}>Send</Button>
                <IconButton onClick={()=>{alert('CLICKED')}} aria-label="send" color  = "success" size = "large">
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction = "row" >
                <ToggleButtonGroup aria-label = "text formatting"value = {format} onChange =  {handleFormatChange} color="success" orientation="vertical" exclusive>
                    <ToggleButton value  = "bold" aria-label = "bold">
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value = "italic" aria-label = "italic">
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value = "underline" aria-label = "underlined">
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}