import Link from 'next/link'
import DarkModeToggleButton from './dark-mode-toggle.button';
import Head from 'next/head';

export default function Header(){
    return(
        <>

<Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TDSG7YS2E5"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-TDSG7YS2E5');
                        `,
                    }}
                />
            </Head>

        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
  <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
  viewBox="0 0 500 500"
>
  <rect fill="#fff"
    height="277.31"
    width="424.18"
    x="37.91"
    y="83.48"
  />
  <rect fill="#e2e2e2"
    height="32.63"
    width="424.18"
    x="37.91"
    y="83.48"
  />
  <rect fill="#e42e44"
    height="56.31"
    rx="12"
    ry="12"
    width="479.96"
    x="10.02"
    y="27.17"
  />
  <path
    fill="#ffc43d"
    d="M164.91,157.14a76.29,76.29,0,1,0,76.3,76.29h-76.3Z"
  />
  <circle fill="#e42e44" cx="250" cy="444.08" r="28.75" />
  <rect
    height="56.31"
    rx="12"
    ry="12"
    width="479.96"
    x="10.02"
    y="27.17"
  />
  <rect
    height="277.31"
    width="424.18"
    x="37.91"
    y="83.48"
  />
  <line x1="250" x2="250" y1="360.79" y2="415.33" />
  <circle cx="250" cy="444.08" r="28.75" />
  <path d="M164.91,157.14a76.29,76.29,0,1,0,76.3,76.29h-76.3Z" />
  <path d="M196.68,125.77v76.3H273A76.29,76.29,0,0,0,196.68,125.77Z" />
  <line x1="311.66" x2="398.78" y1="180.44" y2="180.44" />
  <line x1="311.66" x2="398.78" y1="233.43" y2="233.43" />
  <line x1="311.66" x2="398.78" y1="286.42" y2="286.42" />
</svg>

      <span className="ml-3 text-xl">고한성 포트폴리오</span>
 

  </Link>

  
    

    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      
      
      <Link href="/" className="mr-5 hover:text-gray-900">
      Home
      </Link>

      <Link href="/about" className="mr-5 hover:text-gray-900">
      About me
      </Link>

      <Link href="/projects" className="mr-5 hover:text-gray-900">
       Projects
      </Link>

      <Link href="https://acid7937.tistory.com/" className="mr-5 hover:text-gray-900">
      Blog
      </Link>

      <Link href="https://open.kakao.com/o/safEI5ff" className="mr-5 hover:text-gray-900">
      1:1 chat
      </Link>
     
    </nav>
        {/*다크모드 버튼 작업해야됨*/}
        <DarkModeToggleButton/>
  </div>
</header>
        </>
    );
}