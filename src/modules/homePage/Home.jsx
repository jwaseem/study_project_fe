import React from 'react'
import Grid from '@mui/material/Grid'
import Table from './components/table'
import DataForm from './DataForm';
import { useState, useEffect } from 'react'
import axios from 'axios';
function Home() {
    const [rows, setRows] = useState([])
      useEffect(()=>{
        axios.get('http://localhost:4000/api/data')
        .then(response => {
          setRows(response.data)
          console.log('Data from server:', response.data);
          // Handle the data here (e.g., update UI)
        })
        .catch(error => {
          console.error('There was a problem with the axios request:', error);
          // Handle errors here
        });
      },[]);
      
    // const rows = [
    //     {name:'waseem',age:'26'},
    //     {name:'chithu',age:'28'}
    //   ];
  return (
    <>
    
    <Grid container>
      {/* <Grid item md={12} xs={12}> */}
        
      {/* </Grid> */}
      <Grid item md={6} xs={6} style={{backgroundColor:'blue', backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',width: '100vw'}}>
      <Table rows={rows}/>

      </Grid>
      <Grid item xs={6} md={6} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <DataForm/>
      </Grid>
    </Grid>

  

</>
  )
}

export default Home
