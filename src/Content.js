import React, {Component} from 'react';

export default class Content extends Component{
    render(){
        return(
            <div>
            Content here
            {this.props.name} {this.props.num}
            </div>
        ) 
    }
}

