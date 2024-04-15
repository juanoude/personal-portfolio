'use client';

import { heebo } from '@/app/ui/fonts';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { draculaColors, themeColors } from '@/app/ui/theme';


interface CustomButtonProps extends PropsWithChildren {
  type: "primary" | "secondary";
  color?: string;
}

export function CustomButton(props: CustomButtonProps) {
  const { type, color } = props;

  const defaultType = type ?? 'primary';

  return (
    <CustomButtonEl className={heebo.className} 
        color={color} 
        type={defaultType}>
      {props.children}
    </CustomButtonEl>
  );
}

const CustomButtonEl = styled.button<CustomButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${props => props.type === 'primary' 
    ? themeColors.buttonPrimaryDefault 
    : themeColors.surfaceSecondary};
  color: ${props => !!props.color 
    ? props.color 
    : props.type === 'primary' 
      ? themeColors.primaryButtonLabel 
      : themeColors.textPrimary };
  border: 0;
  border-radius: 8px;
  padding: 16px 24px;
  margin-right: 24px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.type === 'primary' 
      ? draculaColors.red
      : draculaColors.foreground};
    color: ${props => props.type === 'primary' 
      ? draculaColors.foreground
      : draculaColors.currentLine};
  }
`;