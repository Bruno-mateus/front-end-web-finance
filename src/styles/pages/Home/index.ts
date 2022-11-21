import { styled } from "../..";

export const HomeContainer = styled('main',{
    height: '100vh',
    display: 'grid',
    gridTemplateColumns:'1fr 1fr'
})
export const HeroImage = styled('div',{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border: '1px solid red',
    height: '100%',
    img:{
        objectFit:'cover'
    }
})