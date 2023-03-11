import { Search } from '@mui/icons-material'
import { Autocomplete, Box, Grid, TextField } from '@mui/material'
import { textAlign } from '@mui/system'
import React from 'react'

const SearchBar = () => {
  return (
    <>
        <Grid className='search-container'>
            <Box> 
                <Search sx={{color:'#000'}}/>
            </Box>


         </Grid>
    
    </>

  )
}

export default SearchBar
