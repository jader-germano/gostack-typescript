import { Request, Response } from 'express';
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name:'Jader',
        email:'jader.germano@icloud.com',
        password:'1234434',
        techs: ['React', 'Vue', '@Typescript', 'Angular', {title: 'nodeJs', experience: 100, likes: [100]}],

    })
    console.log(user)
    return response.json({message: 'Hello World'})
}