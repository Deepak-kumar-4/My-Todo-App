export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6">
      {/* App Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6">My To-Do App</h1>

      {/* Description */}
      <p className="text-lg md:text-2xl text-center max-w-2xl mb-8">
        A simple and secure way to manage your tasks efficiently. Stay organized and boost your productivity with ease.
      </p>

      {/* Call-to-Action Button */}
      <a
        href="/auth" 
        className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Get Started
      </a>
    </div>
  );
}
