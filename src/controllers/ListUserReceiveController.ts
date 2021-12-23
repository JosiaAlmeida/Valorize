import { Request, Response } from "express";
import {ListUserReceiverService} from '../services/ListUserReceiverService'

class ListUserReceiveController {
    async handle(req:Request, res: Response){
        const {user_id} = req
        const complimentServiceSend = new ListUserReceiverService()
        const compliments = await complimentServiceSend.execute(user_id)

        return res.status(200).json(compliments)
    }
}export {ListUserReceiveController}