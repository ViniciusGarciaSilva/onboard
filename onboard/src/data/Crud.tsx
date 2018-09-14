import { user } from '../domain/User';
import axios from 'axios';

export function edit(user: user, token: string): Promise<any> {
  return createdit(user, 'PUT', token).then((response: any) => { return (response) });
}

export function create(user: user, token: string): Promise<any> {
  return createdit(user, 'POST', token).then((response: any) => { return (response) });
}

function createdit(user: user, type: string, token: string): Promise<any> {
  return axios('https://tq-template-server-sample.herokuapp.com/users/' + (user.id>0?user.id:''), {
    method: type,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    },
    data: ({
      "name": user.name,
      "password": user.password,
      "email": user.email,
      "role": user.role
    }),
  })
    .then((response) => { return (response.data) })
    .catch((error) => { throw (error.response.data.errors[0].message) })
}

export function read(id: number, token: string): Promise<any> {
  return axios('https://tq-template-server-sample.herokuapp.com/users/' + String(id), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
    .then((response) => { return (response.data) })
    .catch((error) => { throw (error.response.data.errors[0].message) })
}

export function get(page: number, window: number, token: string): Promise<any> {
  return axios('https://tq-template-server-sample.herokuapp.com/users?pagination={"page": ' + String(page) + ' , "window": ' + String(window) + '}', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
    .then((response) => { return (response.data) })
    .catch((error) => { throw (error.response.data.errors[0].message) })
}



