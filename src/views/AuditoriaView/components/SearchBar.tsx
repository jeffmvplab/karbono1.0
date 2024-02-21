
import { Search } from '@mui/icons-material'
import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { PrescripcionContext } from '../context/AuditoriaContext'

import { typographyKarbono } from '@/themes/typography'

const SearchBar = () => {

  const { openModalSearch, handleCloseModalSearch, handleOpenModalSearch } = useContext(PrescripcionContext)

  return (
    <>
      <Grid className='search-container'>
        <Box paddingX={1}>
          {/* <CustomButton
            text={'Buscar Predscripción'}
            onClick={() => { handleOpenModalSearch() }}
            width={'200px'}
            variant='text'
            fontSize={'16px'}
            textColor='black'
            borderColor={colorsKarbono.secundary}
            startIcon={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
            sx={{ borderRadius: '10px' }}
          /> */}

          <Button
            onClick={() => { handleOpenModalSearch() }}
            startIcon={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
            variant='text'
          >
            <Typography
              fontFamily={typographyKarbono.outfit}
              // color={textColor}
              textAlign={'center'}
              textTransform='initial'
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: '1px'
              }}
            >Buscar Prescripción</Typography>
          </Button>
          {/* <Search sx={{ color: '#000' }} /> */}
        </Box>


      </Grid>

    </>

  )
}

export default SearchBar
