//this page is nothing home page which means if u open localhost:3000/ from here we will see our home page, so this one page.js is home page for our app
//if we want turn our app into client side rendering we need to use "use client";
//when ever u use React State Management(usestate,useeffect etc..) imp thing is that u need place use client on the top.
"use client";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Working...</h1>
    </main>
  )
}
