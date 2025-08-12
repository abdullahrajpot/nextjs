import Image from "next/image";
import Script from "next/script";
import react from "react";


export default function Home() {
  return (

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <head>
      <title>Hunting Blog</title>
    <Script src="/sc.js" strategy="lazyOnload"></Script> 
    </head>


      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <h1 className="text-4xl font-bold">Hunting coder</h1>
          <p className="mb-2 tracking-[-.01em]">
           A Blog for hunting Coders by a hunting Coder.
          </p>


        <div className="cols-2 flex flex-row ">
          <div className="card w-80 h-70 bg-white darkbg-[#1a1a1a] dark:text-dark p-6 rounded-lg shadow-md mr-4">
            <h1 className="title py-2 font-bold text-xl">Card 1</h1>
            <hr />
            <p className="desc pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum dolor officiis, perferendis natus rerum veritatis sed laudantium, commodi eaque numquam dolores ratione unde quam minima. Modi et quidem harum.</p>
          </div>

           <div className="card w-80 h-70 bg-white darkbg-[#1a1a1a] dark:text-dark p-6 rounded-lg shadow-md">
            <h1 className="title py-2 font-bold text-xl">Card 2</h1>
            <hr />
            <p className="desc pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum dolor officiis, perferendis natus rerum veritatis sed laudantium, commodi eaque numquam dolores ratione unde quam minima. Modi et quidem harum.</p>
          </div>
          
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
     
    </div>
  );
}
