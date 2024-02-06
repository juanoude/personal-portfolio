'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import PortfolioLogo from '@/app/ui/portfolio-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOutAction } from '@/app/lib/actions';
import styled from 'styled-components';
import { auth } from '@/auth';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function SideNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    getSession().then(session => {
      if (!!session?.user) {
        setIsLoggedIn(true);
      } 
    });
  })

  return (
    <NavContainer>
      <PortfolioLogo />
      <Link href="/">
      </Link>
      <NavLinks />
      { !!isLoggedIn && (
        <form action={signOutAction}>
          <LogOutButton>
            <PowerIcon width={20} height={20} />
          </LogOutButton>
        </form>

      )}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;
`;

const LogOutButton = styled.button`
  background-color: purple;
  color: white;
  font-size: 22px;
  border: none;
  width: 25px;
  height: 25px;
  padding: 2px;
  border-radius: 50%;
`;