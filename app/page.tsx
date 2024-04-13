import PortfolioNavbar from './ui/nav-bar'; '@/app/ui/portfolio-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import HeroBanner from './ui/home/hero-banner';

export default function Page() {
  return (
    <main>
      <div>
        <PortfolioNavbar />
      </div>
      <div>
        <div>
          <HeroBanner />

          <Link href="/login">
            <span>Log in</span> <ArrowRightIcon  />
          </Link>
        </div>
        <div>
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project"
          />

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshot of the dashboard project"
          />
        </div>
      </div>
    </main>
  );
}
