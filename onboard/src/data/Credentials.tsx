import axios from 'axios';

export function validate(email: string, password: string): Promise<any> {
    return axios('https://tq-template-server-sample.herokuapp.com/authenticate', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        data: ({
            'password': password,
            'email': email,
            'rememberMe': 'false',
        }),
    })
        .then((response) => { return (response.data) })
        .catch((error: any) => { throw (error.response.data.errors[0].message) })
}