
import React from 'react'

function ThemedBox({theme,text}) {

    const boxStyle = {
        backgroundColor : theme ? 'grey' : 'black',
        color : theme ? 'black' : 'white',
        height : '100px',
        width : '200px',
        padding : '20 px',
        margin :  '20 px'
    }
  return (
    <div style={boxStyle} >{text} </div>
  )
}
export default ThemedBox
