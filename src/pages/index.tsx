
import Image from 'next/image'
import { FormAccount, FormSection, HeroSection, HomeContainer, InputGroup } from '../styles/pages/Home'
import heroImage from '../assets/home-hero.png'
import logo from '../assets/logo-ngcash.svg'

export default function Home() {
  return (
    <HomeContainer>
      <FormSection>
      <FormAccount>
        <header>
          <Image src={logo.src} width={60} height={60} alt=""/>
        </header>
        <h2>Crie sua conta conosco ;)</h2>
        <InputGroup>
          <input type="text" placeholder='Escolha um nickname que será só seu'/>
          <input type="password" placeholder='Digite uma senha'/>
          <input type="password" placeholder='Repita a senha digitada acima'/>
          <button>Cadastrar-se</button>
        </InputGroup>
       </FormAccount>
      </FormSection>

      <HeroSection>
         <Image src={heroImage.src} width={430} height={460} alt=""/>
      </HeroSection>
     
    </HomeContainer>
  )
}
