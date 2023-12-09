import React, { useState } from "react";
import { Container, Button, Menu, MenuItem} from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChairIcon from "@mui/icons-material/Chair";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { Link } from "react-router-dom";


const Header2 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
       
        <Container style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
            
        }}>
            <div >
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{
                        color: "black",
                        width:"200px"
                    }}
                >
                    <WindowIcon />
                    <p style={{ textTransform: "capitalize",margin:"5px" }}>
                        Category
                    </p>
                    <KeyboardArrowRightOutlinedIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AccessTimeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText><Link to="/accessoire1">Accessoires</Link>
                    
                    </ListItemText>
                    
                </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ChairIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText><Link to="/livingroom">Living Room</Link></ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <BathtubIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText><Link to="/bathroom1">Bathroom</Link></ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <BedroomParentIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText><Link to="/bedroom1">BedRoom</Link></ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        </Container>
       
    );
};

export default Header2;
