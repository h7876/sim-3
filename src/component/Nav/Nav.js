import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {getUser} from '../../ducks/reducer'
import axios from 'axios';
import Navi from './Navi.css'


class Nav extends Component{
    componentDidMount(){
        this.props.getUser();
    }
render(){
    let {user_name, img} = this.props.user;
        return(
            <div className = 'Nav'>
                <div className='nav_profile_container'>
                <div className='nav_profile_pic' style={{ backgroundImage: `url('${img}')`}}></div>
                
                </div>
                <p>{user_name}</p>
                <div className='nav_links'>
                <Link to = '/dashboard'><button>Home</button></Link>
                <Link to = '/new'><button>New Post</button></Link>
                <Link to = '/'><button>Logout</button></Link>
           
                </div>
                </div>
                   
        )
     
    }  
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Nav)