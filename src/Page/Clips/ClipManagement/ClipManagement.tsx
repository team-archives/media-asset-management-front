import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import FolderViwer from '@src/components/Clips/ClipManagement/FolderViwer';

const ClipManagement = () => {
  return (
    <ClipManagementContainer>
      <FolderViwer />
    </ClipManagementContainer>
  );
};

const ClipManagementContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default ClipManagement;
