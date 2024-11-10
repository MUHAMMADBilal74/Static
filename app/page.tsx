// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-10 px-4">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="My Resume" />
      </Head>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <header className="text-center mb-8">
          {/* Add the image here */}
          <img
            src="\pic\profile.jpg" // Path to the image in the public folder
            alt="M.Bilal Farooqui"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-md"
          />
          <h1 className="text-4xl font-extrabold text-gray-800">M BILAL FAROOQUI</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
          <div className="text-gray-600 mt-2">
            <p>Email: bilalfarooqui74@gmail.com</p>
            <p>Phone: 0343-3231420</p>
            <p>Location: Shah Faisal, KHI</p>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">JavaScript</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">React</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Node.js</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">TypeScript</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">HTML/CSS</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Git</h3>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">SPEED (PVT) LTD - KHI</p>
              <p>Jan 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Developed web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>Improved performance of key features by optimizing code</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800">Junior Developer</h3>
              <p className="text-gray-600">ACP - KHI</p>
              <p>Jun 2018 - Dec 2019</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Assisted in developing customer-facing applications</li>
                <li>Maintained legacy systems and performed bug fixes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center text-gray-600 mt-8">
          <p>&copy; 2024 BILAL & CO</p>
        </footer>
      </div>
    </div>
  );
}
