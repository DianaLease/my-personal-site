import '@fontsource/asap';
import './globals.css';
import StyledComponentsRegistry from './registry';

export const metadata = {
  title: 'Diana Lease',
  description: 'Diana Lease - Software Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
