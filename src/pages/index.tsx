
import Image from 'next/image'
import { FormAccount, FormSection, HeroSection, HomeContainer, InputGroup } from '../styles/pages/Home'
import heroImage from '../assets/home-hero.png'
import logo from '../assets/logo-ngcash.svg'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod' 
import { DialogHTMLAttributes, useContext, useEffect, useState } from 'react'
import { ICreateUser, userContext } from '../contexts/UserContext'


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

  const {handleCreateUser,loginSuccess,signUser} = useContext(userContext)
  const [isLogin,setIslogin] = useState(false)


console.log(isLogin)
  return (
    
    <HomeContainer>
         
      <FormSection>
      {
      isLogin?(
        <FormAccount onSubmit={handleSubmit(async(e)=>{
          const userLogin = {
            username:e.username,
            password:e.password
          } as ICreateUser

          
          signUser({...userLogin})

          })}>
        <header>
          <Image src={logo.src} width={60} height={60} alt=""/>
        </header>
        <h2>Faça seu login ;)</h2>
        <InputGroup>
          <input type="text" minLength={3} placeholder='Digite seu username' {...register('username')}/>
          <input type="password" minLength={8} placeholder='Digite sua senha' {...register('password')}/>
          {!isLogin && (
            <small>Username ou Senha estão inco</small>
          )}
          <span>Não tem uma conta? <button onClick={(e)=>{  
            e.preventDefault() 
            setIslogin(false)
            }} >Click aqui</button></span>
          <button>Entrar</button>
        </InputGroup>
       </FormAccount>
      ):(
        <FormAccount onSubmit={handleSubmit(async(e)=>handleCreateUser({...e}))}>
        <header>
          <Image src={logo.src} width={60} height={60} alt=""/>
        </header>
        <h2>Crie sua conta conosco ;)</h2>
        <InputGroup>
          <input type="text" minLength={3} placeholder='Escolha um username que será só seu' {...register('username')}/>
          <label>

            <input type="password" id="password" minLength={8} placeholder='Digite uma senha' {...register('password')}/>
            <dialog open>          
                <small>
                  <ul>
                    <li>Ao menos uma letra maiúscula</li>
                    <li>Ao menos uma letra minúscula</li>
                    <li>Ao menos um número </li>
                  </ul>
              </small>
            </dialog>
          </label>



          <input type="password" minLength={8} placeholder='Repita a senha digitada acima' {...register('confirmPassword')}/>
          
          <span>Ja tem uma conta? <button onClick={(e)=>{
            e.preventDefault()
            setIslogin(true)
            }} >Click aqui</button></span>
          <button>Cadastrar-se</button>
        </InputGroup>
       </FormAccount>
      )
    
    }

      </FormSection>

      <HeroSection>
         <Image src={heroImage.src} width={430} height={460} alt=""/>
      </HeroSection>
     
    </HomeContainer>
  )
}



