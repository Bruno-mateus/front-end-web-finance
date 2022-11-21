
import Image from 'next/image'
import { HeroImage, HomeContainer } from '../styles/pages/Home'
import heroImage from '../assets/home-hero.png'

export default function Home() {
  return (
    <HomeContainer>
      <HeroImage>
         <Image src={heroImage.src} width={430} height={460} alt=""/>
      </HeroImage>
    </HomeContainer>
  )
}
