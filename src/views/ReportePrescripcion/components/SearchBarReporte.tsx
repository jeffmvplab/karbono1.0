import { Search } from '@mui/icons-material'
import {  Box, Grid} from '@mui/material'

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
