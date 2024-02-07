import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './route'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './modules/homePage/Home';
function Theme() {
    const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
    {/* <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        
      </Switch>
    </Router> */}
    </>
  )
}

export default Theme
