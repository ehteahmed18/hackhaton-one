import Image from 'next/image'
import Navbar from './components/Navbar'
import  Main  from "./components/Main"
import Event from './components/Event'
import { Unique } from './components/Unique'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className=" bg-white w-full h-screen">
        {/* <Navbar/> */}
        <Main/>
        <Event/>
        {/*@ts-ignore*/ }
        <Products/>
        <Unique/>
        <Newsletter/>
        <Footer/>
      </div>
    </>
  )
}
