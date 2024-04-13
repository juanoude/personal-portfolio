import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import StyledComponentsRegistry from "@/lib/registry";
 
export const metadata: Metadata = {
  title: {
    template: "%s | Juan Ananda's Portfolio",
    default: "Juan Ananda's Portfolio",
  },
  description: 'This is the Juan Ananda Developer Portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${inter.className}`}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
