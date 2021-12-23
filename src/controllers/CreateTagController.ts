import { Request, Response } from "express";
import { CreateTagServices } from "../services/CreateTagServices";


class CreateTagController{
    async handle(req: Request, res: Response){
        const {name} = req.body

        const TagService = new CreateTagServices()

        const tag = await TagService.execute(name)

        return res.json(tag)


    }
}export {CreateTagController}