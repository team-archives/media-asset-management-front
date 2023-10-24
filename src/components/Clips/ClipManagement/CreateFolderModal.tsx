import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

interface CreateFolderModalProps {
  parentFolderId: number | null;
  onClose: () => void;
}

const CreateFolderModal = ({ parentFolderId, onClose }: CreateFolderModalProps) => {
  return (
    <CreateFolderModalContainer>
      <Header>
        폴더 생성하기
        <CloseButton onClick={onClose}>
          <AiOutlineClose size={20} color="gray" onClick={onClose} />
        </CloseButton>
      </Header>
      <Body>
        <div>폴더명</div>
        <input type="text" />
        <button type="submit">폴더 생성</button>
      </Body>
    </CreateFolderModalContainer>
  );
};

const CreateFolderModalContainer = styled.div`
  width: 500px;
  height: 370px;
  background-color: ${({ theme }) => theme.palette.cnps.realWhite};
  border: 1px solid #777777;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.h1`
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.div`
  cursor: pointer;
  padding: 0.5rem;
`;

const Body = styled.form`
  display: flex;
  flex-direction: column;
`;

export default CreateFolderModal;
