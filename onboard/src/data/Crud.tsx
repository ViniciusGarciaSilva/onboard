import { user } from '../domain/User'; 

export function edit(user: user, token: string): any{
  return crud(user, 'PUT', token);
}

export function create(user: user, token: string): any{
  console.log('crudData/create --> ',user);
  return crud(user, 'POST', token);
}

export function crud(user: user, type: string, token: string):any  {
  console.log("crudData/crud --> ", user);
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
      console.log('CrudData/crud ->' ,responseJson);
      return (responseJson);
    })
    .catch((error) => {
      console.log('CrudData/crud error ->' ,error);
      return error;
    })
  )
}