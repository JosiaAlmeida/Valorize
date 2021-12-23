import express, { NextFunction, Request, Response } from 'express'
import "reflect-metadata"
import { router } from './routes'
import 'express-async-error'

import "./database"

const app = express()

app.use(express.json())

app.use(router)

//middlewere para tratamento de erro
app.use((err: Error, req:Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            err: err.message
        })
    }
    
    return res.status(500).json({
        status: "error",
        message: "Internal Server error"
    })
})

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))