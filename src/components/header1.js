import React from "react";
import { Container, Stack } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import log from "../assets/log.jpg";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useShoppingCart} from "./context/shoppingCart";
import "./styles/logo.css";


const Header1 = () => {
    const { cartQuantity } = useShoppingCart();
  
    return (
      <Container style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <Stack direction="row" alignItems="center">
          <img src={log} alt="Logo" className="logo" />
        </Stack>
        <form style={{ display: "flex", alignItems: "center" }}>
          <input placeholder="search" aria-label="search" />
          <Button type="submit" variant="outlined" color="success">
            Search
          </Button>
        </form>
        <Stack direction={"row"} alignItems={"center"}>
          <Link to="/cartIconGL" style={{ textDecoration: 'none' }}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cartQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/loginsignup" style={{ textDecoration: 'none' }}>
            <IconButton>
              <Person2OutlinedIcon />
            </IconButton>
          </Link>
        </Stack>
      </Container>
    );
  };
  
  export default Header1;