import type { Metadata } from 'next';
import Image from 'next/image';
import profileImage from '../../public/images/pofile.jpg';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Personal site of Muhammad Rifky Harto Biantoro',
    openGraph: {
      images: 'http://192.168.56.1:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpofile.c19d019a.jpg&w=3840&q=75',
      url: 'http://192.168.56.1:3000/',
    },
};
export default function TentangSaya() {
  return (
    <div className='mt-16 px-8'>
      <header>
        <h1 className='font-bold text-4xl text-zinc-800'>Tentang Saya</h1>
        <p className='text-base mt-6 text-zinc-600'>Kenali lebih lanjut tentang saya dan apa yang saya kerjakan.</p>
      </header>
      <div className='mt-16 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/3 mb-8 md:mb-0'>
          <Image
            className='w-48 h-48 object-cover rounded-full shadow-lg mx-auto md:mx-0'
            src={profileImage}
            alt='Profile Image'
          />
        </div>
        <div className='md:w-2/3 md:pl-8 text-center md:text-left'>
          <h2 className='font-bold text-2xl text-zinc-800'>Halo, saya Muhammad Rifky Harto Biantoro</h2>
          <p className='text-lg text-zinc-600 mt-4'>
            Saya seorang pengembang web dan penulis yang fokus pada pengembangan aplikasi web dan berbagi pengetahuan melalui tulisan saya.
          </p>
          <p className='text-base text-zinc-500 mt-4'>
            Saya juga tertarik dalam desain antarmuka dan pengembangan aplikasi berbasis frontend dan backend. Selain itu, saya senang berbagi tutorial, artikel, dan berbicara dalam konferensi.
          </p>
          <a href='mailto:muh.rifky.harto@gmail.com' className='mt-8 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600'>
            Hubungi Saya
          </a>
        </div>
      </div>
    </div>
  );
}
