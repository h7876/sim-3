import React from 'react';
import {Component} from 'react';
import Nav from '../Nav/Nav';

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            message: '',
            img: '',
            profile_img: ''
        }
        this.addMessage = this.addMessage.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    addMessage(e){
        this.setState ({message: e.target.value})
        console.log(this.state.message)
    }

    addPhoto(e){
        this.setState({img: e.target.value})
        console.log(this.state.image)
    }
    
    

    render(){
        return(
            
            <div>
                <Nav/>
                Form
                <div> <input type="text" onChange = {this.addMessage} placeholder = 'Message'/>
                <input type="text" onChange = {this.addPhoto} placeholder = 'Image'/>
                <img src={this.state.img} alt="Photo"/>
</div>
                </div>
               
        )
    }

}
