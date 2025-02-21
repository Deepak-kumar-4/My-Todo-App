import { useRouter } from "next/router";

export default function LoginRedirect() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Oops! You need to log in.</h1>
      <p className="text-gray-600 mb-6">You are trying to access a protected page. Please log in to continue.</p>
      <button
        onClick={() => router.push("/auth")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Login Page
      </button>
    </div>
  );
}
