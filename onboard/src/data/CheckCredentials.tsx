export function checkCredentials(email: string, password: string): any {
  return fetch('https://tq-template-server-sample.herokuapp.com/authenticate', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          'password': password,
          'email': email,
          'rememberMe': 'false',
      }),
  })
      .then((response) => response.json())
      .then((responseJson) => {
          return (responseJson);
      })
      .catch((error) => {
          console.error(error);
      })
}