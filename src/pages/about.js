export async function getStaticProps() {
  return {
    props: {
      generatedAt: new Date().toISOString(), // Capture the build time
    },
    revalidate: 10, // Regenerates the page every 10 seconds if a request is made
  };
}

export default function About({ generatedAt }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Our To-Do App</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <p className="text-gray-800 text-lg">
          Stay organized and boost your productivity with our smart and simple To-Do app! Designed with efficiency in mind, 
          our app helps you manage your daily tasks seamlessly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-gray-700">✨ Features</h2>
        <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
          <li><strong>User Authentication</strong> – Secure login with NextAuth</li>
          <li><strong>Task Management</strong> – Add, edit, delete and mark tasks</li>
          <li><strong>Public Notes</strong> – View shared tasks in real-time</li>
          <li><strong>Real-time Data Fetching</strong> – Uses SSR for live updates</li>
          <li><strong>Stylish UI</strong> – Clean, modern design with Tailwind CSS</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-gray-700">🚀 Technology Stack</h2>
        <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
          <li><strong>Next.js</strong> – Powerful React framework</li>
          <li><strong>Tailwind CSS</strong> – Modern styling</li>
          <li><strong>NextAuth.js</strong> – Secure authentication</li>
          <li><strong>Vercel</strong> – Fast and scalable deployment</li>
        </ul>

        <p className="text-gray-600 mt-6 text-sm">
          <strong>Last Updated:</strong> {generatedAt}
        </p>
      </div>
    </div>
  );
}
