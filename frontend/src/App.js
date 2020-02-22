import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand,Container} from 'reactstrap'
import {NavLink as RouterNavLink,Route,Switch} from 'react-router-dom'
import {NavLink} from "react-router-dom";
import MainNews from "./container/mainNews";
import PostFormContainer from "./components/postForm-container";

function App() {
  return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand tag={RouterNavLink} to="/">NEWS</NavbarBrand>

        </Navbar>
        <Container>
          <Switch>
            <Route path="/" exact component={MainNews}/>
            <Route path="/new/:id" component={PostFormContainer}/>
          </Switch>
        </Container>
      </div>
  );
}

export default App;
