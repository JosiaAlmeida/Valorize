import { getCustomRepository } from 'typeorm';
import { TagRepositories } from '../repositories/TagRepositories';

interface ITag{
    name: string
}

class CreateTagServices{
    async execute({name}:ITag){
        const tagRepository = getCustomRepository(TagRepositories)

        if(!name) throw new Error("Name incorrect")

        const tagAlreadyExists = await tagRepository.findOne({
            name
        })

        if(tagAlreadyExists) throw new Error("Name already existent")

        const Tags = tagRepository.create({
            name
        })

        await tagRepository.save(Tags)

        return Tags
    }
}export {CreateTagServices}