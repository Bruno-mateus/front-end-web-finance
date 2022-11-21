import { styled } from "../..";
import backgroundImage from '../../../assets/background.png'

export const HomeContainer = styled('main',{
    height: '100vh',
    width:'100vw',
    display: 'grid',
    gridTemplateColumns:'1fr 1fr',
    margin:'auto',
    backgroundImage:`url(${backgroundImage.src})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:'center',
    backgroundSize:'cover',
    '@bp2':{
        gridTemplateColumns:'1fr'
    }
 
})
export const HeroSection = styled('section',{
  
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: '100%',
    img:{
        objectFit:'cover',

    },
    '@bp2':{
       display:'none'
    }
})

export const FormSection = styled('section',{
 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: '100%',
    header:{
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        background:'$gray900',
        borderRadius:' 10px 10px 0 0',
    },
})

export const FormAccount = styled('form',{

    display:'flex',
    flexDirection:'column',
    width:'26.875rem',
    height:'28.75rem',
    textAlign:'center',
    gap:'1rem',
    borderRadius:'15px 15px 10px 10px',
    background:'$white',
    margin: "auto",
    boxShadow: '10px 10px 0px 0px rgba(255,255,255,0.75)',
})

export const InputGroup = styled('div',{
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
    padding:'0 1rem',
    input:{
        width:'100%',
        padding:'1rem',
    },
    button:{
        width:'100%',
        padding:'1rem',
        backgroundColor:'$gray900',
        color:'$white',
        fontWeight:'bold',
        fontSize:'1.2rem'
    }
})