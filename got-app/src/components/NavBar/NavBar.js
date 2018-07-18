import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingGear from '@material-ui/icons/Settings';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };
    
    handleChange = (event, checked) => {
    this.setState({ auth: checked });
    };
    
    handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
    this.setState({ anchorEl: null });
    };
    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <div>
                <AppBar position="static">
                    <ToolBar>
                        <Typography variant="title" color="inherit">
                            Mobile App with Badges
                        </Typography>
                        <div>
                            <IconButton aria-owns={open ? 'menu-appbar' : null} color="inherit" onClick={this.handleMenu} >
                                <SettingGear />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                                >
                                <Link to="/home">
                                    <MenuItem onClick={this.handleClose}>Home</MenuItem>
                                </Link>
                                <Link to="/trophy">
                                    <MenuItem onClick={this.handleClose}>Trophy</MenuItem>
                                </Link>
                                <Link to="/badge/BlastOff">
                                    <MenuItem onClick={this.handleClose}>Badge</MenuItem>
                                </Link>
                            </Menu>
                        </div>
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;