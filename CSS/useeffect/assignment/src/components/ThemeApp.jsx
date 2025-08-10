import React, { useState } from 'react'
import ThemedBox from './ThemedBox'


function ThemeApp() {

       const [theme,setTheme] = useState(true)

       function handleTheme(){
        setTheme(!theme)
       }

  return (
    
    <div>

        <h1> This is the PropDrilling Of components</h1>
        <button onClick={handleTheme}>
            {theme?'Dark':'Light'}
        </button>

        <div>

        <ThemedBox theme={theme} text="Box1" />
        <ThemedBox  theme={theme} text = "box2"/>
        <ThemedBox theme = {theme} text = "Box2"/>
        
        </div>
        
    </div>
  )
}

export default ThemeApp
