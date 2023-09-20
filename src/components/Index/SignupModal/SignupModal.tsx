import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignupPayload, signup } from '@src/api/Normal/AuthManagementAPI';

interface SignupModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SignupModal = ({ open, setOpen }: SignupModalProps) => {
  const { register, handleSubmit } = useForm<SignupPayload>();

  const signupSubmit: SubmitHandler<SignupPayload> = async (data) => {
    try {
      const res = await signup(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    open && (
      <BackDrop onClick={() => setOpen(false)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalHead>
            <h1>사용자 요청</h1>
            <CloseButton type="button" onClick={() => setOpen(false)}>
              <AiOutlineClose size={26} />
            </CloseButton>
          </ModalHead>

          <InputContainer onSubmit={handleSubmit(signupSubmit)}>
            <InputWrapper>
              <Label>아이디</Label>
              <Input type="text" placeholder="아이디를 입력하세요." {...register('account')} />
            </InputWrapper>
            <InputWrapper>
              <Label>비밀번호</Label>
              <Input type="text" placeholder="비밀번호를 입력하세요." {...register('password')} />
            </InputWrapper>
            <InputWrapper>
              <Label>이름</Label>
              <Input type="text" placeholder="이름을 입력하세요." {...register('name')} />
            </InputWrapper>
            <InputWrapper>
              <Label>성별</Label>
              <Select defaultValue={1} {...register('gender')}>
                <option value={1}>남자</option>
                <option value={0}>여자</option>
              </Select>
            </InputWrapper>
            <InputWrapper>
              <Label>전화번호</Label>
              <Input
                type="number"
                placeholder="전화번호를 입력하세요."
                {...register('phone')}
                onFocus={(e) =>
                  e.target.addEventListener('wheel', function (e) {
                    e.preventDefault();
                  })
                }
              />
            </InputWrapper>
            <InputWrapper>
              <Label>이메일</Label>
              <Input type="email" placeholder="이메일을 입력하세요." {...register('email')} />
            </InputWrapper>
            <InputWrapper>
              <Label>부서</Label>
              <Select {...register('deptId')}>
                <option value={3}>예능제작1부</option>
                <option value={4}>예능제작2부</option>
                <option value={6}>시사교양제작1부</option>
                <option value={7}>시사교양제작2부</option>
                <option value={10}>기술관리부</option>
                <option value={12}>백앤드제작1부</option>
                <option value={14}>프론트제작1부</option>
                <option value={15}>프론트디자인제작1부</option>
                <option value={16}>기술관리부</option>
                <option value={18}>예능제작3부</option>
                <option value={33}>테스트3팀</option>
              </Select>
            </InputWrapper>
            <InputWrapper>
              <Label>직급</Label>
              <Select {...register('rankId')}>
                <option value={2}>사원</option>
                <option value={3}>대리</option>
                <option value={4}>과장</option>
                <option value={5}>차장</option>
                <option value={6}>사장</option>
                <option value={12}>ADMIN</option>
              </Select>
            </InputWrapper>
            <InputWrapper>
              <Label>신청사유</Label>
              <Input type="text" placeholder="신청사유를 입력하세요." {...register('des')} />
            </InputWrapper>
            <SigninButton type="submit">신청</SigninButton>
          </InputContainer>
        </ModalContainer>
      </BackDrop>
    )
  );
};

const BackDrop = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 500px;
  background-color: ${({ theme }) => theme.palette.cnps.realWhite};
  color: ${({ theme }) => theme.palette.cnps.black};
  border-radius: 8px;
  padding: 16px;
`;

const ModalHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  h1 {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    color: gray;
    :hover {
      color: ${({ theme }) => theme.palette.cnps.black};
    }
  }
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Label = styled.label`
  color: #000;
`;

const Input = styled.input`
  border-radius: 6px;
  padding: 6px 12px;
  border: 1px solid #dee2e6;
  font-size: 1rem;
  height: 38px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Select = styled.select`
  border-radius: 6px;
  padding: 6px 36px 6px 12px;
  border: 1px solid #dee2e6;
  font-size: 1rem;
  height: 38px;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border: 1px solid #dfdfdf;
`;

const SigninButton = styled.button`
  width: 100%;
  border-radius: 6px;
  padding: 16px;
  border: none;
  background-color: #2e3440;
  color: #f2f2f2;
  margin-top: 34px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.palette.cnps.red};
  }
`;

export default SignupModal;
