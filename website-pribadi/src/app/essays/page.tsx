import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import articleImage1 from '../../../public/images/article1.png';
import articleImage2 from '../../../public/images/article2.png';

type ArticleItemProps = {
  title: string;
  url: string;
  description: string;
  imageSrc: StaticImageData;
};

function ArticleItem({ title, url, description, imageSrc }: ArticleItemProps) {
  return (
    <li>
      <a href={url}>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <Image className='w-full' src={imageSrc} alt={title} />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{title}</div>
            <p className='text-base text-zinc-600'>{description}</p>
          </div>
          <div className='px-6 pb-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Baca Selengkapnya</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export const metadata: Metadata = {
  title: 'Esai Saya',
  description: 'Beberapa esai yang pernah saya buat dan publikasikan',
  openGraph: {
    images: 'http://192.168.56.1:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farticle1.87f34d8f.png&w=3840&q=75',
    url: 'http://192.168.56.1:3000/essays',
  },
};

export default function Esai() {
  return (
    <div className='mt-16 px-8'>
      <header>
        <h1 className='font-bold text-4xl text-zinc-800'>Esai Saya</h1>
        <p className='text-base mt-6 text-zinc-600'>Berikut adalah beberapa esai yang telah saya tulis.</p>
      </header>
      <div className='mt-16'>
        <h2 className='font-bold text-2xl'>Artikel Terbaru</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-8'>
          <ArticleItem
            title='Artikel 1'
            url='https://example.com'
            description='Deskripsi singkat artikel 1...'
            imageSrc={articleImage1}
          />
          <ArticleItem
            title='Artikel 2'
            url='https://example.com'
            description='Deskripsi singkat artikel 2...'
            imageSrc={articleImage2}
          />
          {/* Add more articles here */}
        </ul>
      </div>
    </div>
  );
}
