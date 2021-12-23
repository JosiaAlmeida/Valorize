import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController{
    async handle(req:Request, res: Response){
        const {email, password} = req.body

        const AuthService = new AuthenticateUserService()
        
        const Auth = await AuthService.execute({email, password})

        return res.status(200).json(Auth)
    }
}export {AuthenticateUserController}