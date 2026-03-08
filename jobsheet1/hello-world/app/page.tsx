import Image from "next/image";
import Link from "next/link";

/*
   MyButton Component
 */
function MyButton() {
  return (
    <a
      href="http://localhost:3000"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-full items-center justify-center rounded-full bg-blue-500 px-5 text-white transition-colors hover:bg-blue-600 md:w-[158px]"
    >
      Buka Halaman
    </a>
  );
}

/*
   Data User 
   */

const user = {
  name: "Febrian Arka Samudra",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

/* 
   Profile Component
 */
function Profile() {
  return (
    <>
      <div className="text-xs mt-6">
        Developed by: {user.name}
      </div>

      <img
        className="rounded-full mt-3"
        src={user.imageUrl}
        alt={"Foto " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

/* 
   Main Page
 */
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>

          <MyButton />
        </div>

        <Profile />

      </main>
    </div>
  );
}