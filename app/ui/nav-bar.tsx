'use client';

import { heebo } from '@/app/ui/fonts';
import Image from 'next/image';
import styled from 'styled-components';

export default function PortfolioNavbar() {
  return (
    <NavContainer
      className={heebo.className}
    >
      <LogoContainer>
        <Image src="/portfolio-logo-96.png"
              width={60}
              height={60}
              alt="Porfolio logo image"
            />
        <LogoText>{"Juan Ananda's Portfolio"}</LogoText>
      </LogoContainer>
      <NavOptions>
        <NavOption selected>
          Home
        </NavOption>
        <NavOption>
          About
        </NavOption>
        <NavOption>
          Projects
        </NavOption>
        <NavOption>
          Contact
        </NavOption>
      </NavOptions>

      {/* TODO: Create theme switch and Language selector here */}
    </NavContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavContainer = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #282A36;
  width: calc(100% - 16px);
  margin: 0;
  box-shadow: 0px 8px 16px #000;
`;

const LogoText = styled.p`
  font-size: 16px;
  margin-left: 16px;
  color: #FFF;
`;

const NavOption = styled.p<{ selected?: boolean }>`
  color: ${props => props.selected ? '#BD93F9'  : '#6272A4'};
  font-weight: ${props => props.selected ? '700'  : '400'};
  font-size: 16px;
  margin: 0 16px;

  &:hover {
    color: #8BE9FD
  }
`;

const NavOptions = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;