import { getCustomRepository } from 'typeorm';
import { TagRepositories } from '../repositories/TagRepositories';

class ListTagsService{
    async execute(){
        const tagsRepositories = getCustomRepository(TagRepositories)

        const tags = await tagsRepositories.find()
        const allTag = tags.map((tag)=> tag)

        return allTag
    }
}export {ListTagsService}