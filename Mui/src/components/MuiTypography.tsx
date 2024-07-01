import { Typography } from "@mui/material";

type MuiTypographyProps = {
  heading: string;
}

export default function MuiTypography({ heading }: MuiTypographyProps) {
  return (
    <div>
      <Typography variant="h4" component="h1">{heading}</Typography>
    </div>
  );
}
