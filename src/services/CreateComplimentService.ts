import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface ICompliments{
    tag_id: string
    user_sender: string
    user_receiver:string
    message: string
}

class CreateComplimentService{
    async execute({tag_id, user_sender, user_receiver, message}: ICompliments){
        const ComplimentRepo = getCustomRepository(ComplimentRepositories)
        const userRepositories = getCustomRepository(UsersRepositories)

        if(user_sender === user_receiver ) throw new Error("User iquals!! Not Allow send compliment for ever you ")

        //Verificando usuario que recebe o elogio
        const userReceiverExists = await userRepositories.findOne(user_receiver)

        if(!userReceiverExists) throw new Error("User Receiver does not exists!")

        const compliment = ComplimentRepo.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await ComplimentRepo.save(compliment)
        return compliment

    }
}export{CreateComplimentService}