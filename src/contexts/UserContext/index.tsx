import axios from "axios";
import { createContext, ReactNode, useCallback, useState } from "react";
import { api } from "../../services/api";

interface ContextData{
    loginSuccess:boolean
    handleCreateUser:(user:ICreateUser)=>void
    signUser:(user:ICreateUser)=>void
}

export interface ICreateUser{
    username: string;
    password: string;
    confirmPassword:string
}

interface UserContextProps{
    children:ReactNode
}

export const userContext = createContext({} as ContextData)



export function UserContextProvider({children}:UserContextProps){
    //  const [user,setUser] = useState<IUser>({} as IUser)

    const [loginSuccess,setLoginSuccess] = useState<boolean>()

    async function handleCreateUser({username,password,confirmPassword}:ICreateUser){
    if(password!=confirmPassword){
      return  alert('senhas não conferem')
        
    }
    await api.post('/user/',{
            username,
            password
        })
     
}

async function signUser({username,password}:ICreateUser){
    try{
        await api.post('/authenticate/',{
            username,
            password
        })

        setLoginSuccess(true)

    }catch(e){
      
      setLoginSuccess(false)
    }
}

    return(
        <userContext.Provider value={{handleCreateUser,loginSuccess,signUser}}>
                {children}
        </userContext.Provider>
    )
}