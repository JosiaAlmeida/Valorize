import { getCustomRepository } from 'typeorm';
import {UsersRepositories} from '../repositories/UsersRepositories'
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface IAuthenticate{
    email: string
    password: string
}

class AuthenticateUserService{
    async execute({email, password}:IAuthenticate){
        const usersRepositories = getCustomRepository(UsersRepositories)
        //Verificar se email existe
        const userExists = await usersRepositories.findOne({
            email
        })

        if(!userExists){
            throw new Error("Email/Password incorrect")
        }

        //Verificar se senha esta correta
        const pass = await compare(password, userExists.password)
        if(!pass){
            throw new Error("Email/Password incorrect")
        }
        //gerar token
        const token = await sign({
            email: userExists.email
        },
        "cfa86d97341ff9dbbc1a84268cf24b3a",
        {
            subject: userExists.id,
            expiresIn: "1d"
        })
        return ({userExists,token})
    }
}export {AuthenticateUserService}