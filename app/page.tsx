import Image from 'next/image'
import avatar from 'app/avatar.webp'
import desktop from 'public/main/desktop.webp'
import cloth from 'public/main/cloth.webp'
import shoe from 'public/main/shoe.webp'
import home from 'public/main/home.webp'
import Link from 'next/link'
import { GitHubIcon } from './components/Icon'
import NowPlayingInit from './components/now-playing'

export default async function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-8">
        <Image
          alt={'Hamster1963'}
          src={avatar}
          height={64}
          width={64}
          sizes="33vw"
          placeholder="blur"
          className="mb-6 h-14 w-14 rounded-full border border-neutral-200 dark:border-neutral-700"
          priority
        />
        <h1 className="mb-1 text-xl font-medium tracking-tighter">
          邵瑞星和扣帅男
        </h1>
        <p className="prose prose-neutral text-sm dark:prose-invert">
          这是一个关于邵瑞星和扣帅男的爱情故事。
        </p>
        <p className={'mb-6 pt-10 text-lg font-medium tracking-tight'}>
          🌸 在樱花树下，他们的目光交汇，爱情的种子悄然萌发。
          <br />
          🌊 在海边漫步，他们倾诉心声，爱情如海般深邃。
          <br />
          🎵 在生活的舞台上，他们携手共舞，谱写爱的旋律。
          <br />
        </p>
        <NowPlayingInit />
        <div className={'mt-6 flex items-center'}>
          <Link href="https://github.com/hamster1963" target="_blank">
            <button
              className={
                'mr-4 flex items-center justify-center rounded-xl border-[0.5px] border-neutral-200 p-2 text-xs font-medium shadow-[0_2px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-stone-100 hover:shadow-none dark:border-neutral-700 dark:bg-neutral-700/20 dark:hover:bg-neutral-900/20'
              }
            >
              <GitHubIcon className="mr-1 h-4" />
              <p>GitHub</p>
            </button>
          </Link>
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          <Link
            href={'https://home.buycoffee.top'}
            target="_blank"
            className="text-xs font-medium"
          >
            Monitor
          </Link>
          <p className="mx-1 text-xs font-medium">/</p>
          <Link
            href={'https://changelog.buycoffee.top'}
            target="_blank"
            className="text-xs font-medium"
          >
            Changelog
          </Link>
        </div>
      </section>
      <Photos />
    </section>
  )
}

function Photos() {
  const photo_1 = desktop
  const photo_2 = shoe
  const photo_3 = cloth
  const photo_4 = home
  return (
    <section
      className={
        '-mx-6 overflow-scroll sm:mx-0 sm:flex sm:flex-row sm:justify-center md:overflow-visible'
      }
    >
      <section className={'relative h-[460px] w-[800px]'}>
        <div
          style={{
            transform:
              'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(-4deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)',
            position: 'absolute',
            left: 'calc(17.75% - 109px)',
            top: 'calc(48.913% - 138px)',
          }}
          className={
            'transform-none-on-hover h-[276px] w-[218px] cursor-pointer rounded-lg border-[8px] border-white shadow-md transition-all duration-300 hover:shadow-xl'
          }
        >
          <Image
            alt={'photo_1'}
            src={photo_1}
            placeholder="blur"
            fill
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            transform:
              'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(1deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)',
            position: 'absolute',
            left: 'calc(40% - 109px)',
            top: 'calc(58% - 138px)',
          }}
          className={
            'transform-none-on-hover h-[276px] w-[218px] cursor-pointer rounded-lg border-[8px] border-white shadow-md transition-all duration-300 hover:shadow-xl'
          }
        >
          <Image
            alt={'photo_2'}
            src={photo_2}
            placeholder="blur"
            fill
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            transform:
              'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)',
            position: 'absolute',
            left: 'calc(64% - 109px)',
            top: 'calc(38% - 138px)',
          }}
          className={
            'transform-none-on-hover h-[276px] w-[218px] cursor-pointer rounded-lg border-[8px] border-white shadow-md transition-all duration-300 hover:shadow-xl'
          }
        >
          <Image
            alt={'photo_3'}
            src={photo_3}
            placeholder="blur"
            fill
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            transform:
              'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(-2deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)',
            position: 'absolute',
            left: 'calc(83% - 109px)',
            top: 'calc(55% - 138px)',
          }}
          className={
            'transform-none-on-hover h-[276px] w-[218px] cursor-pointer rounded-lg border-[8px] border-white shadow-md transition-all duration-300 hover:shadow-xl'
          }
        >
          <Image
            alt={'photo_4'}
            src={photo_4}
            placeholder="blur"
            fill
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>
    </section>
  )
}
