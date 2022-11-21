import { globalCss } from ".";
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
      

    },
    'body,input,button,textarea':{
        '-webkit-font-smoothing':'antialiased',
        fontFamily:"'IBM Plex Sans', sans-serif;",
        fontWeight:'400',
        
    },

    'button':{
        "&:hover":{
            cursor:'pointer'
        }
    }
    
})