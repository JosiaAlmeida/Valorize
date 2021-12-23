import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import {classToPlain} from 'class-transformer'

class ListUserService{
    async execute(){
        const listUser = getCustomRepository(UsersRepositories)

        const user = await listUser.find()
        const allUser =  user.map(u=> u)

        return classToPlain(allUser)
    }
}export {ListUserService}