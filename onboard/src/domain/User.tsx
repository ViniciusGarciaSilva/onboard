import { edit, create } from '../data/Crud'

export type user = {
    id: number;
    name: string;
    password: string;
    email: string;
    active: boolean;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export function createUser(user: user, token: string) { //{result: boolean, message: string} {
    return create(user, token).
    then((response: any) => {
        console.log('User/createUser --> ', response);
        if(response.data==null&&response.errors!=null)
            return ({result: false, message: response.errors[0].message });
        if(response.data!=null)
            return ({result: true, message: "User Created" });
        return ({result: false, message: "ERROR" });
    });
}

export function editUser(user: user, token: string): any { //{result: boolean, message: string} {
    edit(user, token).then((response: any) => {
        if(response.data==null)
            return ({result: false, message: response.errors[0].message });
        else
            return ({result: true, message: "User Edited!" });
    });
}