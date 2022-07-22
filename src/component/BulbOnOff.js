//off image: https://www.w3schools.com/js/pic_bulboff.gif
//on image: https://www.w3schools.com/js/pic_bulbon.gif

import React,{Component} from 'react'

export class Bulb extends Component{
    constructor(props){
        super(props)
        this.state={
            bulb: false
        }
    }
    turnOn=()=>{
        this.setState({ bulb: true})
    }
    turnOff=()=>{
        this.setState({bulb:false})
    }
    toggle = () =>{
        this.setState((prevState)=>({ 
            bulb: !prevState.bulb
        }))
    }
    render(){
        const styles={
            button: {padding:"10px 15px" , margin:'10px', fontSize:"2rem"}
        }
    let bulbOn='https://www.w3schools.com/js/pic_bulbon.gif'
    let bulbOff='https://www.w3schools.com/js/pic_bulboff.gif'
        return(
            <>
            {/* using terniary operator if bulb status is false then bulbOff image will render otherwise on */}
            <div id='bulb-img' style={{margin: '30px'}}>
            <img src= {this.state.bulb ? bulbOn : bulbOff} alt='bulb-img'/>  
            </div>
            
            <button style={styles.button} onClick={this.turnOn} height="500" alt='bulb'>On</button>
            <button style={styles.button} onClick={this.turnOff} height="500" alt='bulb'>Off</button>
            <br/>
            <br/>
            <button style={styles.button} onClick={this.toggle} height="500" alt='bulb'>{this.state.bulb ? 'Turn Off': 'Turn On'}</button>
            
            </>
 

        )
    }
}