const tokenkey = 'authData';
type Loginresponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
  };
  
export const saveAuthData = (obj: Loginresponse) => {
  localStorage.setItem(tokenkey, JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(tokenkey) ?? '{}';
  return JSON.parse(str) as Loginresponse;
};

export const removeAuthData = () => {
  localStorage.removeItem(tokenkey);
};
