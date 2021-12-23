import {Request, Response,  NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload{
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    //Receber Token
    const token = req.headers.authorization

    //Validar se token esta preenchido
    if(!token) res.status(401).json({message: "Token invalid"})

    const [,TokenSplit] = token.split(' ')
    //Validar se token eh valido
    try {
        const {sub} = verify(TokenSplit,"cfa86d97341ff9dbbc1a84268cf24b3a") as IPayload

        req.user_id = sub
        return next()
    } catch (error) {
        return res.status(401).json({message: "Token invalid"})
    }

    //Recuperar informacoes do usuario

}
