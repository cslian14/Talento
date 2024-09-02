import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      {/* Header Section */}
      <header className="w-full text-center mb-12">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600">
          Learn more about who we are and what we do.
        </p>
      </header>

      {/* About Us Section */}
      <section className="w-full max-w-4xl text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700">
        Talento is an online talent booking management system platform that simplifies the process of matching talent performers with clients for bookings. 
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-4xl text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To bring people together by providing an easy and reliable way to book the best talent for any event.
          Our goal is to ensure every event is memorable, successful, and perfectly matched with the right talent.
        </p>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-8">Meet Our Team</h2>
        <div className="flex justify-center space-x-8">
          {/* Example Team Member */}
          <div className="text-center">
            <Image
              src="/john.jpg"
              alt="Team Member 1"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Clifford Tumulak</h3>
            <p className="text-gray-600">Project Manager</p>
          </div>
          <div className="text-center">
            <Image
              src="/gar.jpg"
              alt="Team Member 2"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">James Garthcliff Albejos</h3>
            <p className="text-gray-600">Tester</p>
          </div>
          <div className="text-center">
            <Image
              src="/ayji.png"
              alt="Team Member 3"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Ian Jeoffrey Casul</h3>
            <p className="text-gray-600">Hipster</p>
          </div>
          <div className="text-center">
            <Image
              src="/ninz.jpg"
              alt="Team Member 4"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Nino Rey Garbo</h3>
            <p className="text-gray-600">Hacker</p>
          </div>
          <div className="text-center">
            <Image
              src="/kris.jpg"
              alt="Team Member 5"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Kris Justin Oporto</h3>
            <p className="text-gray-600">Hacker</p>
          </div>
        </div>
      </section>
    </main>
  );
}
