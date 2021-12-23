import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController{
    async handle(req: Request, res: Response){
        const {tag_id, user_sender, user_receiver, message} = req.body
        const {user_id} = req
        const ComplimentService = new CreateComplimentService()

        const Compliment = await ComplimentService.execute({
            tag_id, 
            user_sender: user_id, 
            user_receiver, 
            message})

        return res.status(200).json(Compliment)
    }
}export {CreateComplimentController}