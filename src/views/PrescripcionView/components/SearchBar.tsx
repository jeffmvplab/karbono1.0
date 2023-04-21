import { CustomButton } from '@/components/CustomButton'
import { colorsKarbono } from '@/themes/colors'
import { Search } from '@mui/icons-material'
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material'
import { textAlign } from '@mui/system'
import React, { useContext } from 'react'
import { PrescripcionContext } from '../context/PrescripcionContext'
import { Button } from '@material-ui/core'

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
              // color={textColor}
              textAlign={'center'}
              textTransform='initial'
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: '1px'
              }}
            >Buscar Predscripción</Typography>
          </Button>
          {/* <Search sx={{ color: '#000' }} /> */}
        </Box>


      </Grid>

    </>

  )
}

export default SearchBar
