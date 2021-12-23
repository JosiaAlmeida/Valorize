import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";


class ListTagController{
    async handle(req: Request, res: Response){
        const listTagService = new ListTagsService()

        const Tages = await listTagService.execute()

        return res.status(200).json(Tages)
    }
}export {ListTagController}