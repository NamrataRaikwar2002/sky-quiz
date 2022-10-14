import { Dispatch, SetStateAction } from "react"

export type AuthInitialState = {
        token:string,
        user: string
}

export type AuthContextType = {
    userInfo:AuthInitialState,
    setuserInfo:Dispatch<SetStateAction<AuthInitialState>>
    signupUser: (email: string, password: string) => Promise<void>
    loginUser: (email: string, password: string) => Promise<void>
}