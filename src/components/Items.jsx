import {Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Items = ({item}) => {
   

  return (
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         {`${item.first_name} ${item.last_name}`}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {item.gender}
        </Typography>
        <Typography >
          adjective
        </Typography>
        <Typography>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
</Grid>
  )
}

export default Items