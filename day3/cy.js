import React from 'react';
const instyle={
      backgroundColor:'lightpink',
      border:'3px solid black',
      margin:'150px',
      padding:'20px',
    height:'300px',
    width:'500px'
    
 };
class Weather extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            location:'Newyork',
            Temperature:'20°C',
            Condition:'Sunny'
        }

    }
    Click = (event) => {
        event.preventDefault(); 
        
        const Loc = document.getElementById('loc');
        const Locval = Loc.value;
        
        this.setState((pre)=>({location:pre.location==='Newyork'?Locval :'Newyork'}))
                
    }
    
   
    render()
    {
        return(
            <center><form onSubmit={this.Click} style={instyle}>
            <h1>WEATHER APPLICATION</h1>
            <input type="text" placeholder="Enter new Location" id="loc" required/>
            <button type='submit'>Update Location</button>
            <h4>Current Weather:{this.state.location}</h4>
            <h4>Temperture:{this.state.Temperature}</h4>
            <h4>Condition:{this.state.Condition}</h4>
            </form></center>
        )
    }
}
export default Weather;