import { useState } from 'react';
import styled from '@emotion/styled';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ToggleContainer onClick={toggleDarkMode}>
      <ToggleSlider isDarkMode={isDarkMode} />

      <DarkModeTitleContainer>
        <DarkModeTitle>
          <FiSun size={24} color="#bbbbbb" />
          Light
        </DarkModeTitle>
        <DarkModeTitle>
          <FiMoon size={24} color="#bbbbbb" />
          Dark
        </DarkModeTitle>
      </DarkModeTitleContainer>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  width: 100%;
  height: 35px;
  background-color: white;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
`;

const ToggleSlider = styled.div<{ isDarkMode: boolean }>`
  width: 50%;
  height: 30px;
  border-radius: 1rem;
  background-color: #5e6265;
  position: absolute;
  top: 2.5px;
  left: ${({ isDarkMode }) => (isDarkMode ? '48.7%' : '2.5px')};
  transition: left 0.2s ease-in-out;
`;

const DarkModeTitleContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  z-index: 1;
  top: 5px;
  left: 1.4rem;
`;

const DarkModeTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #bbbbbb;
`;

export default DarkModeToggle;
