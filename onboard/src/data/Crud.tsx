import { user } from '../domain/User'; 

export function edit(user: user, token: string): any{
  return createdit(user, 'PUT', token);
}

export function create(user: user, token: string): any{
  return createdit(user, 'POST', token);
}

function createdit(user: user, type: string, token: string):any  {
  var id='';
  if(user.id>0) id=String(user.id);
  return (
    fetch('https://tq-template-server-sample.herokuapp.com/users/' + id, {
      method: type,
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({
        "name": user.name,
        "password": user.password,
        "email": user.email,
        "role": user.role
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log('CrudData/crud ->' ,responseJson);
      return (responseJson);
    })
    .catch((error) => {
      //console.log('CrudData/crud error ->' ,error);
      return error;
    })
  )
}

export function read(id: number, token: string): any{
  return fetch('https://tq-template-server-sample.herokuapp.com/users/' + String(id), {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
        //console.log('crudData/getUser -> responseJson: ', responseJson);
        return (responseJson);
    })
    .catch((error) => {
        console.error(error);
    })
}

export function get(page: number, window: number, token: string): any{
  return fetch('https://tq-template-server-sample.herokuapp.com/users?pagination={"page": ' + String(page) + ' , "window": ' + String(window) + '}', {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token
      }
  })
      .then((response) => response.json())
      .then((responseJson) => {
          //console.log('ListScreen/getUsers -> responseJson: : ', responseJson);
          return (responseJson);
      })
      .catch((error) => {
          //console.error(error);
      })
}