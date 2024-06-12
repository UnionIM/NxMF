import React, { ChangeEvent, FormEvent, useState } from 'react';
import loginAxios from '../../api/apiLogin';
import process from 'process';
import { Form } from './styled';
import { useMutation } from 'react-query';

const Login = () => {
  const [username, setUsername] = useState<string>('demodev');
  const [password, setPassword] = useState<string>('Demodev123456');

  const [loading, setLoading] = useState<boolean>(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);

    loginAxios
      .post('/access_token', {
        grant_type: 'password',
        client_id: process.env.NX_PUBLIC_CLIENT_ID,
        client_secret: process.env.NX_PUBLIC_CLIENT_SECRET,
        username,
        password,
        mfa_token: '',
        scope: 'openid',
      })
      .then((res: any) => {
        localStorage.setItem('token', res.data.access_token);
      })
      .catch((err) => {
        console.log('ERR', err);
      })
      .finally(() => setLoading(false));
  };

  const handleRemoveToken = () => {
    localStorage.setItem('token', '');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={'username'}
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder={'password'}
        value={password}
        onChange={handlePasswordChange}
      />
      <button type={'submit'}>{loading ? 'Loading...' : 'Submit'}</button>
      <button type={'button'} onClick={handleRemoveToken}>
        Remove token
      </button>
    </Form>
  );
};

export default Login;
