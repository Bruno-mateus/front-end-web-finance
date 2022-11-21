
import Image from 'next/image'
import { FormAccount, FormSection, HeroSection, HomeContainer, InputGroup } from '../styles/pages/Home'
import heroImage from '../assets/home-hero.png'
import logo from '../assets/logo-ngcash.svg'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod' 

export default function Home() {
  const FormCreateUserSchema = z.object({
    username:z.string(),
    password:z.string(),
    confirmPassword:z.string(),
  })

  type TypeFormCreateUser = z.infer<typeof FormCreateUserSchema>

  const {register,handleSubmit} = useForm<TypeFormCreateUser>({
    resolver:zodResolver(FormCreateUserSchema)
  })

  return (
    
    <HomeContainer>
         
      <FormSection>
      <FormAccount onSubmit={handleSubmit(e=>console.log(e))}>
        <header>
          <Image src={logo.src} width={60} height={60} alt=""/>
        </header>
        <h2>Crie sua conta conosco ;)</h2>
        <InputGroup>
          <input type="text" minLength={3} placeholder='Escolha um nickname que será só seu' {...register('username')}/>
          <input type="password" minLength={8} placeholder='Digite uma senha' {...register('password')}/>
          <input type="password" minLength={8} placeholder='Repita a senha digitada acima' {...register('confirmPassword')}/>
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
