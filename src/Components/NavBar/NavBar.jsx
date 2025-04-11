import logo from "../../assets/logo-03.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Link to='/'>
                            <img src={logo} alt="Logo" style={{ height: 40, marginRight: 20 }} />
                        </Link>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 100 }}
                        >
                        </IconButton>
                        <Box sx={{ display: 'flex', gap:2 }}>
                            <NavLink to='category/Packs de Clases'>
                                Packs de Clases
                            </NavLink>
                            <NavLink to='category/Agenda de Clases'>
                                Agenda de Clases
                            </NavLink>
                            <CartWidget />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default NavBar