import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center p-6 border-b">
        <div className="text-2xl font-bold">TALENTO</div>
        <nav className="space-x-8">
          <a href="/home" className="text-gray-600 hover:text-black">Home</a>
          <a href="/category" className="text-gray-600 hover:text-black">Category</a>
          <a href="/about-us"  className="text-gray-600 hover:text-black">About Us</a>
        </nav>
        <button className="bg-gray-300 px-4 py-2 rounded">LOG IN</button>
      </header>

      {/* Main Banner Section */}
      <section className="w-full bg-gray-800 text-white py-16 flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-4">Book a Talent for your Event!</h1>
        <div className="flex space-x-4">
          <select className="p-3 rounded bg-white text-black">
            <option>Select Event</option>
            <option>Birthday</option>
            <option>Wedding</option>
            <option>Festivals</option>
            <option>Team Building</option>
          </select>
          <select className="p-3 rounded bg-white text-black">
            <option>Select Theme</option>
            <option>Christmas</option>
            <option>Romance</option>
            <option>Circus</option>
            <option>Oldies</option>
          </select>
          <button className="bg-gray-500 px-6 py-3 rounded">Search</button>
        </div>
      </section>

      {/* Browse By Category Section */}
      <section className="w-full max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Browse By Category</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Replace with dynamic category content */}
          <div className="bg-purple-500 rounded-lg h-48 flex items-center justify-center text-white">Category 1</div>
          <div className="bg-orange-500 rounded-lg h-48 flex items-center justify-center text-white">Category 2</div>
          <div className="bg-red-500 rounded-lg h-48 flex items-center justify-center text-white">Category 3</div>
          {/* Add more categories as needed */}
        </div>
      </section>
    </main>
  );
}
