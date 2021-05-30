/* eslint-disable no-restricted-globals */
import { useCallback } from 'react';
import { KAKAO_OAUTH_URL } from '#/lib/constants';
import Button from '../Button';

const LoginButton = () => {
  const onClickKakaoLogin = useCallback(() => {
    if (typeof location !== 'undefined') {
      location.href = KAKAO_OAUTH_URL;
    }
  }, []);

  return (
    <Button onClick={onClickKakaoLogin}>
      Login
    </Button>
  );
};

export default LoginButton;
