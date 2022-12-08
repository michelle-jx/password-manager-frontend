import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from '@mui/material'


function AccountCard({ account }) {

  /* const mappedPasswords = account.passwords.map((password) => {
    return password.password_name.map((user) => {
      return user.passwords.map((password) => {
        return console.log(password.users)
      })
    })}) */

    const mappedPasswords = account.passwords.map((password) => {
      return password.password_name
    })

    const mappedUsers = account.passwords.map((password) => {
      return password.users.map((user) => {
        return user.name
      })
    })
  


  return (
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justify="center"
        /* direction="row"
        style={{ minHeight: '10vh' }} */
      >
    {/* <Box width='600px' display='flex'> */}
      <Grid item xs={3}>
        <Card>
          <CardMedia
            component='img'
            height='140'
            image='https://source.unsplash.com/random/'
            alt='random image from unsplash'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>{account.websites}</Typography>
            <Typography variant='body2' color='text.secondary'>{mappedUsers}</Typography>
            <Typography variant='body2' color='text.secondary'>{mappedPasswords}</Typography>
          </CardContent>
          <CardActions>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    {/* </Box> */}
    </Grid>
  )

}

export default AccountCard;

