export function checkName (name: string): boolean {
  var checkName = /^[a-zA-Z]+$/;

  if (checkName.test(name))
    return true;
  else
    return false;
};

export function checkEmail(email: string): boolean {
  var checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return checkEmail.test(email); 
};

export function checkPassword7(password: string): boolean {
  var checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
  return checkPassword.test(password);
};

export function checkPassword4(password: string): boolean {
  var checkPassword = /.{4,}/;

  if (checkPassword.test(password))
    return true;
  else
    return false;
};

export function checkRole(role: string): boolean{
  if (role=='admin' || role=='user')
    return true;
  else
    return false;
};


