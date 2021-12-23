import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import {v4 as uuid} from 'uuid'
import { Tag } from './Tag';
import { User } from './User';

@Entity("compliments2")
class Compliment{
    @PrimaryColumn()
    readonly id: string

    @Column()
    user_sender: string

    //Referenciando Tabelas
    @JoinColumn({name:"user_sender"})
    userSender: User

    @Column()
    user_receiver: string

    @JoinColumn({name:"user_receiver"})
    userReceiver: User

    @Column()
    tag_id: string

    //Referenciando uma tabela
    @JoinColumn({name:"tag_id"})
    @ManyToOne(()=> Tag) //Tipo de relacionamento #Muitos para um
    tag: Tag

    @Column()
    message: string

    @CreateDateColumn()
    created_at: string

    constructor(){
        if(!this.id) this.id = uuid()
    }
}export {Compliment}