import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from 'bcryptjs'

interface IUserRequest{
    name: string
    email: string
    admin?:boolean
    password: string
}
class CreateUserServices{
    async execute({name, email, admin, password}:IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories)

        //Verificando email
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists) throw new Error ("User already exists")

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash //Add passwordHash in password
        })

        await usersRepository.save(user)

        return user
    }
}
export {CreateUserServices}