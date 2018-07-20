import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingGear from '@material-ui/icons/Settings';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
            score: 0
        };
    }
    
    
    handleChange = (event, checked) => {
    this.setState({ auth: checked });
    };
    
    handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
    this.setState({ anchorEl: null });
    };

    updateScore() {
        var customerBadges = localStorage.getItem('customerBadges');
        if(customerBadges != null) {
            var jsonCustomerBadges = JSON.parse(customerBadges);
            var score = 0;
            for(var i=0; i < jsonCustomerBadges.length; i++){
                score += jsonCustomerBadges[i].point * jsonCustomerBadges[i].count;
            }

            this.setState({ 
                score: score == null || score == undefined ? 0 : score
            });
        }
    }

    componentWillMount() {
        this.updateScore();
    }

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
                        <div className="NavBar-Right">
                            <div className="NavBar-RocketPoint"><p>{this.state.score}</p></div>
                            <div className="NavBar-RocketPointImage">
                                <img src="/images/trans_rocket_point.png" />
                            </div>
                        </div>
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;