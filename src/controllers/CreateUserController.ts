import {Request, Response} from 'express'
import { CreateUserServices } from '../services/CreateUserServices'

class CreateUserController{
    async handle(req: Request, res: Response){
        const {name, email, admin} = req.body

        const Createservice = new CreateUserServices()

        const user = await Createservice.execute({name, email, admin})

        return res.json(user);
    }
}
export {CreateUserController}