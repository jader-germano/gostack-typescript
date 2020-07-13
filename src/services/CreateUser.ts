/**
 * To create: name, email, password
 */
interface TechObject {
    title: string;
    experience: number;
    likes: number[];
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}
export default function createUser({ name='', email, password, techs }: CreateUserData) {
    return {
        name,
        email,
        password,
        techs
    };
}