import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginPayload, login } from '@src/api/Normal/AuthAPI';
import { useNavigate } from 'react-router-dom';

// Todo: transition
// Todo: 반응형과 자잘한 스타일 수정 특히 LeftBox의 size 고정시키는거
// Todo: X버튼 svg컴포넌트화
// Todo: 비밀번호 찾기, 사용자 신청 모달창

const RightBoxForm = () => {
  const navigate = useNavigate();
  const [versionBox, setVersionBox] = useState(true);
  const [savedId, setSavedId] = useState(false);
  const { register, handleSubmit, watch } = useForm<LoginPayload>();

  const loginSubmit: SubmitHandler<LoginPayload> = async (data) => {
    try {
      const res = await login(data);
      console.log(res);
      if (savedId) {
        localStorage.setItem('savedId', watch('account'));
      } else {
        localStorage.removeItem('savedId');
      }
      navigate('/user/clip');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('savedId')) {
      setSavedId(true);
    }
  }, []);

  const handleSavedId = () => {
    setSavedId((prev) => !prev);
  };

  const handleVersionBox = () => {
    setVersionBox(false);
  };

  return (
    <Form onSubmit={handleSubmit(loginSubmit)}>
      {versionBox && (
        <VersionBox isShow={versionBox}>
          ALPHA VERSION
          <CloseButton type="button" onClick={handleVersionBox}>
            X
          </CloseButton>
        </VersionBox>
      )}

      <Input
        type="text"
        placeholder="아이디를 입력하세요"
        {...register('account')}
        defaultValue={localStorage.getItem('savedId') ?? ''}
      />
      <Input type="text" placeholder="비밀번호를 입력하세요" {...register('password')} />
      <label>
        <input type="checkbox" checked={savedId} onChange={handleSavedId} />
        아이디 기억하기
      </label>
      <LoginButton type="submit">로그인</LoginButton>
    </Form>
  );
};

const VersionBox = styled.div<{ isShow: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  padding: 1rem;
  border: 1px solid #a3cfbb;
  background-color: #d1e7dd;
  color: #0a3622;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
`;

const CloseButton = styled.button`
  width: 48px;
  height: 100%;
  position: absolute;
  right: 0;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.cnps.realWhite};
  opacity: 0.5;
  cursor: pointer;
  padding: 1.25rem 1rem;

  &:hover {
    background-color: #f3f9f7;
    opacity: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  color: #2f3336;
  border: none;
  background-color: #f0f2f6;
  border-radius: 0.5rem;
  height: 56px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }

  ::placeholder {
    font-size: 1rem;
  }
`;

const LoginButton = styled.button`
  color: ${({ theme }) => theme.palette.cnps.realWhite};
  background-color: ${({ theme }) => theme.palette.cnps.black};
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.palette.cnps.red};
  }
`;

export default RightBoxForm;
