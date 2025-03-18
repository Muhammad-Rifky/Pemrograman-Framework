import Layout from '../app/components/Layout';
import { Metadata } from 'next/';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Website Pribadi',
  description: 'Website pribadi untuk menampilkan proyek dan essay saya.',
};

export default function RootLayout({
  children
  
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout pageId="about_me">
          {children}
        </Layout>
      </body>
    </html>
  );
}