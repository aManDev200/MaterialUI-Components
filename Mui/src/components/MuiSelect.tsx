import { Box, TextField, MenuItem, Stack } from "@mui/material";
import React, { useState, useEffect } from 'react';

interface Country {
  name: {
    common: string;
    official: string;
  };
}

interface CountryName {
  commonName: string;
  officialName: string;
}

async function handle(): Promise<CountryName[]> {
  const data: Country[] = await test();
  return data.map((country: Country): CountryName => ({
    commonName: country.name.common,
    officialName: country.name.official,
  }));
}

async function test(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
  const data: Country[] = await response.json();
  return data;
}

export default function MuiSelect() {
  const [country, setCountry] = useState<string>('');
  const [countries, setCountries] = useState<CountryName[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const fetchedCountries = await handle();
      setCountries(fetchedCountries);
    };
    fetchCountries();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <Stack spacing={2} direction="row">
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          {countries.map((country) => (
            <MenuItem key={country.commonName} value={country.commonName}>
              {country.commonName}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Stack>
  );
}