import React from 'react'

import { Box, Button, Grid, TextField, Typography } from '@mui/material'

function SignInForm({handleChangeUsername, username, handleChangePassword, password, handleSubmit}) {
  return (
    <>
      <Grid container direction='column' justifyContent='center' alignItems='center' >
        <Typography variant='h5' sx={{mt: 5}}> Login Station </Typography>
        <Box component='hr' width={250} />
        <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit} >
          <div>
            <TextField
              label='Usuario:'
              helperText='Nunca revele su usuario'
              variant='standard'
              value={username}
              onChange={handleChangeUsername}
              required
            />
          </div>
          <div>
            <TextField
              label='Contraseña:'
              helperText='Nunca revele su usuario'
              type='password'
              variant='standard'
              value={password}
              onChange={handleChangePassword}
              required
            />
          </div>
          <div>
            <Button
              type='submit'
              sx={{
                display: 'block',
                ml: 'auto',
                mr: 'auto'
              }}
            >
              Login In
            </Button>
          </div>
        </Box>
      </Grid>
    </>
  )
}

export default SignInForm
