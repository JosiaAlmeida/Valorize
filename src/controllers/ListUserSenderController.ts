import { Request, Response } from "express";
import {ListUserSenderService} from '../services/ListUserSenderService'

class ListUserSenderController {
    async handle(req:Request, res: Response){
        const {user_id} = req
        const complimentServiceSend = new ListUserSenderService()
        const compliments = await complimentServiceSend.execute(user_id)

        return res.status(200).json(compliments)
    }
}export {ListUserSenderController}