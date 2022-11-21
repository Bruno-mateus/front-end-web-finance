import { globalCss } from ".";
import backgroundImage from '../assets/background.png'
export const globalStyles =  globalCss({
    '*':{
        padding:0,
        margin:0,
        boxSizing:'border-box'
    },
    'html,body':{
        height:'100vh'
    },
    body:{
        backgroundColor:'$black',
        backgroundImage:`url(${backgroundImage.src})`

    },
    'body,input,button,textarea':{
        '-webkit-font-smoothing':'antialiased',
        fontFamily:"'IBM Plex Sans', sans-serif;",
        fontWeight:'400',
        color:'$white'
    },

    'button':{
        "&:hover":{
            cursor:'pointer'
        }
    }
    
})