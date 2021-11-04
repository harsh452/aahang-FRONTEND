import React, { Component } from 'react'

export class Stripadd extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        {console.log(this.props.adds[0])}
        return (
            <div style={{width:'100%',textAlign:'center'}}>
                <img style={{width:'50%',height:'90px',borderRadius:'30px'}} src={this.props.adds[0]}></img>
            </div>
        )
    }
}

export default Stripadd
