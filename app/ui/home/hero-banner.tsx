'use client';

import { heebo, kalam } from '@/app/ui/fonts';
import Image from 'next/image';
import styled from 'styled-components';

export default function HeroBanner() {
  return (
    <HeroBannerContainer
      className={heebo.className}
    >
      <div>
        <HeroTitle className={kalam.className}>{"Hi, I'm Juan Ananda"}</HeroTitle>
        <HeroSubTitle>Full-Stack developer and innovation enthusiast</HeroSubTitle>
        <HeroText>Over 4 years of experience in the tech industry. I specialize in building innovative web and mobile applications using technologies such as React, React Native, and Node.js.</HeroText>
        <ButtonsContainer>
          <HeroBtn>My Resume</HeroBtn>
          <HeroBtn>Get in touch</HeroBtn>
        </ButtonsContainer>
      </div>

      <Image
            style={{marginTop: -150}}
            src="/hero-banner-img.png"
            width={426}
            height={506}
            alt="Screenshot of the dashboard project"
          />
    </HeroBannerContainer>
  );
}

const HeroBannerContainer = styled.div`
  margin-top: 200px;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  background: linear-gradient(0deg, #9955E8, #7BFFAF);
  background-clip: text;
  margin-bottom: 32px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubTitle = styled.h2`
  font-size: 24px;
  color: #BD93F9;
  font-weight: 700;
  margin-bottom: 16px;
`;

const HeroText = styled.p`
  color: #6272A4;
  font-size: 16px;
  margin-bottom: 32px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeroBtn = styled.button`

`;