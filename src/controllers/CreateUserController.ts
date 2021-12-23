import {Request, Response} from 'express'
import { CreateUserServices } from '../services/CreateUserServices'

class CreateUserController{
    async handle(req: Request, res: Response){
        const {name, email, admin, password} = req.body

        const Createservice = new CreateUserServices()

        const user = await Createservice.execute({name, email, admin, password})

        return res.json(user);
    }
}
export {CreateUserController}