import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../../public/images/projects1.png';
import image2 from '../../../public/images/projects2.png';

/*export const metadata: Metadata = {
  title: 'Website Pribadi',
  description: 'Website pribadi untuk menampilkan proyek dan essay saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya',
  },
};

export default function Home() {
  return (
    <div className='mt-16 px-8'>
      <header>
        <h1 className='font-bold text-4xl text-zinc-800'>Tentang Proyek yang saya kerjakan</h1>
      </header>
    </div>
  );
}
*/

type ProjectsItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectsItem({ name, url, urlDisplay, imageSrc }: ProjectsItemProps) {
  return ( 
    <li>
      <a href={url}>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image className='w-full' src={imageSrc} alt={name} />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{name}</div>
            </div>
            <div className='px-6 pb-4'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{urlDisplay}</span>
            </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <div className='mt-16 px-8'>
      <header>
        <h1 className='font-bold text-4xl text-zinc-800'>Tentang Proyek yang saya kerjakan</h1>
        <p className='text-base mt-6 text-zinc-600'>Berikut adalah beberapa proyek yang pernah saya kerjakan.</p>
      </header>
      <div className='mt-16'> 
        <h2 className='font-bold text-2xl'>Aplikasi</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8'>
          <ProjectsItem name='Project 1' url='https://example.com' urlDisplay='Siwarga13' imageSrc={image1} />
          <ProjectsItem name='Project 2' url='https://example.com' urlDisplay='Cat' imageSrc={image2} />
        </ul>
      </div>
    </div>
  );
}
