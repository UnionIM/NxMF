import loginAxios from '../apiLogin';
import process from 'process';

interface ILoginData {
  password: string;
  username: string;
}

const loginQuery = async (data: ILoginData) => {
  const { username, password } = data;
  const response = await loginAxios.post('/access_token', {
    grant_type: 'password',
    client_id: process.env.NX_PUBLIC_CLIENT_ID,
    client_secret: process.env.NX_PUBLIC_CLIENT_SECRET,
    username,
    password,
    mfa_token: '',
    scope: 'openid',
  });
  return response.data;
};
