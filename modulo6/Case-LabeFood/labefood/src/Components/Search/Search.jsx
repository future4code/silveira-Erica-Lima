import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputSearch } from './styled';

const Search = () => {
  return (
    <InputSearch>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Pesquisa..." id="fullWidth" />
    </Box>
    </InputSearch>
  );
}

export default  Search;