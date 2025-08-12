import Image from "next/image";
import Script from "next/script";
import react from "react";


export default function Home() {
  return (

    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16">
      <head>
        <title>Hunting Blog</title>
        {/* <Script src="/sc.js" strategy="lazyOnload"></Script>/ */}
      </head>



      <nav className="flex items-center justify-between mt-20 ">
          <ul className=" flex justify-between items-center gap-4 text-lg font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
      </nav>


      <main className="flex flex-col gap-[32px] row-start-2 items-start sm:items-center mt-10">
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

          <div className="card w-80 h-70 bg-white darkbg-[#1a1a1a] dark:text-dark p-6 rounded-lg shadow-md mr-4">
            <h1 className="title py-2 font-bold text-xl">Card 2</h1>
            <hr />
            <p className="desc pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum dolor officiis, perferendis natus rerum veritatis sed laudantium, commodi eaque numquam dolores ratione unde quam minima. Modi et quidem harum.</p>
          </div>

          <div className="card w-80 h-70 bg-white darkbg-[#1a1a1a] dark:text-dark p-6 rounded-lg shadow-md">
            <h1 className="title py-2 font-bold text-xl">Card 3</h1>
            <hr />
            <p className="desc pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum dolor officiis, perferendis natus rerum veritatis sed laudantium, commodi eaque numquam dolores ratione unde quam minima. Modi et quidem harum.</p>
          </div>

        </div>

       
      </main>

    </div>
  );
}
