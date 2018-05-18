import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer'
import Nav from '../Nav/Nav';

 class Dashboard extends Component {
    componentDidMount(){
        this.props.getUser();
    }
    render(){
        let {user_name, img} = this.props.user;
        return(
            <div>
                <Nav/>
                <h2>News Feed</h2>
                <hr/> 
                {
                   user_name ?
                <div></div> :
                    <p>Please <Link to = '/'> Login </Link></p>
                }
                </div>
        )
    }
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Dashboard)