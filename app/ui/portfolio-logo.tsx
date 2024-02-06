'use client';

import { roboto } from '@/app/ui/fonts';
import Image from 'next/image';
import styled from 'styled-components';

export default function AcmeLogo() {
  return (
    <LogoContainer
      className={roboto.className}
    >
      <Image src="/portfolio-logo-96.png"
            width={60}
            height={60}
            alt="Porfolio logo image"
          />
      <LogoText>Juan Ananda</LogoText>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoText = styled.p`
  font-size: 44px;
  margin-left: 16px;
`;