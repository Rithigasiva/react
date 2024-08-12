import React from "react";
function App()
{
    const imgurl="data:image/png;base64,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";
    const dstyle=
    {
        backgroundColor:'lightblue',
        width:'300px',
        height:'350px',
        padding:'50px',
        margin:'340px',
        border:'1px solid blue',
    }
    return(
        <div style={dstyle}>
            <center><h1><b>Smile Component</b></h1>
            <p style={{height:"100px"}}>It is a functional component</p>
            <img src={imgurl} alt='Not found' height="100px" weight="100px"></img></center>
        </div>
    )

}
export default App;