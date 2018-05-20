import React from 'react';
import {Component} from 'react';
import Nav from '../Nav/Nav';
import {getPosts} from '../../ducks/reducer';
import Dashboard from '../Dashboard/Dashboard';
import {connect} from 'react-redux';

export class Post extends Component {
    componentDidMount(){
        this.props.getPosts([0])
        console.log(this.props.post);
    }
    render(){
        let {message, img, profile_img, user_name} = this.props.post;
        return(
            
            <div>
                <Nav/>
                Post
                <div>
                {user_name}
                {message} 
                </div>
                </div>
        )
   
    }

}
function mapStateToProps(state){
    return{
        post: state.post
        
    }
}


export default connect(mapStateToProps, {getPosts})(Post)
