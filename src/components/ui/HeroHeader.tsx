import Image from 'next/image';
import { clsx } from 'clsx';

interface Props {
  bgImageSrc?: string;
  heroImgSrc?: string;
  title?: string;
  subTitle?: string;
  action?: React.ReactNode;
  viewHeight?: string;
}

export function HeroHeader({
  bgImageSrc = '',
  heroImgSrc = '',
  title,
  subTitle,
  action,
  viewHeight = '60vh',
}: Props) {
  return (
    <header
      style={{
        backgroundImage: bgImageSrc
          ? `linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.40),
          rgba(0, 0, 0, 0.40)
        ), url(${bgImageSrc})`
          : '',
        height: viewHeight,
      }}
      className={clsx(
        `flex flex-col items-center justify-center px-5 bg-center bg-no-repeat bg-cover`
      )}
    >
      <div
        className={clsx(
          'text-center text-white w-full',
          heroImgSrc && '-mt-[70px]'
        )}
      >
        {heroImgSrc && (
          <Image
            src={heroImgSrc}
            width="300"
            height="200"
            alt=""
            className=""
          />
        )}
        <h1 className="text-4xl font-bold text-center lg:text-5xl text-white lg:w-3/4 mx-auto tracking-wider !leading-snug">
          {title}
        </h1>
        <h2 className="mt-6 text-2xl font-bold !leading-normal lg:text-4xl tracking-wider text-white text-center lg:w-1/2 mx-auto">
          {subTitle}
        </h2>
      </div>
      {action && <div className="mt-8">{action}</div>}
    </header>
  );
}
