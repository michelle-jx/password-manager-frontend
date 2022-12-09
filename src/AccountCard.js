import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from '@mui/material'
import { AccountBoxSharp } from '@mui/icons-material';


function AccountCard({ account, onPatchAccount, onDeleteAccount }) {

  const mappedPasswords = account.passwords.map((password) => {
    return password.password_name
  })

  const mappedUsers = account.passwords.map((password) => {
    return password.users.map((user) => {
      return user.name
    })
  })

  //TODO ok it works but i don't know why?? 
  //passing account.websites from here, then websites in acct page 
  function handleDelete(e) {
    fetch(`http://localhost:9292/accounts/${account.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(onDeleteAccount(account.websites))
  }

  function handlePatch(e) {
    fetch(`http://localhost:9292/accounts/${account.id}`, {
      method: "PATCH",
      headers: {'content-type': "application/json"},
      body: JSON.stringify({
        account: {
          websites: e.target.value[0],
          passwords: [
            {
              password_name: e.target.value[1],
              users: [{ name: e.target.value[2], }]
            }
          ]}
      }),
    })
    .then(resp => resp.json())
    .then(updatedAccount => onPatchAccount(updatedAccount))
  }

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
            <Button onClick={handlePatch}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* </Box> */}
    </Grid>
  )

}

export default AccountCard;

