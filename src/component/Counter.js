import React, {Component} from 'react'

export class Counter extends Component{
    constructor(props){  //state and props are handled inside constructor. Local variable inside render method
        super(props)
        this.state={
            count:0
        }
    }
  
incrementCounter = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))   //increasing value by 1 from previous value
}
//to return an object {count: this.state.count + 1}, wrap in ().
decrementCounter = () => {
    this.setState((prevState)=> ({count: prevState.count - 1}))
}
// setState method are asynchronous. so every time calling this.incrementCounter, it is taking the job to +1 
//with the initial state 0  so all increase by 1. So we should use previous satate. If there are any previous state
//it will wait for the state to return the data and only when the state returns the data then it catches the data
// and update the counter.
incrementBy5=()=>{
   this.incrementCounter()  
   this.incrementCounter()
   this.incrementCounter()
   this.incrementCounter()
   this.incrementCounter()
}
decrementBy5 = ()=>{
    this.decrementCounter()
    this.decrementCounter()
    this.decrementCounter()
    this.decrementCounter()
    this.decrementCounter()
} 
    render(){
        const styles={
            counter:{fontSize: '16em'},
            button: {padding:"10px 15px",margin: '10px', fontSize:"2rem"}
        }
    
        let {count} =this.state   //destructuring props
    return(
        <>
        {/* <div style={{fontSize: '20em'}}>0</div>
        <button style={{padding:"10px 15px" , fontSize:"2rem"}}>Increment</button> */}
        
        <div style={styles.counter}>{count}</div>
        <button style={styles.button} onClick={this.incrementCounter}>Increment</button> 
        <button style={styles.button} onClick={this.decrementCounter}>Decrement</button>
        <button style={styles.button} onClick={this.incrementBy5}>Increment by 5</button>
        <button style={styles.button} onClick={this.decrementBy5}>Decrement By 5</button>
        </>
    )
    }
}