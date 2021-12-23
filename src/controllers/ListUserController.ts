import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";


class ListUserController{
    async handle(req: Request, res: Response){
        const listUserService = new ListUserService()

        const user  = await listUserService.execute()

        return res.status(200).json(user)
    }
}export {ListUserController}