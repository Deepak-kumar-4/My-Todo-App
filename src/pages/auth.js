import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validateInputs = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and password cannot be empty.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    if (!validateInputs()) return;

    const res = await signIn("credentials", {
      redirect: false,
      username: username.trim(),
      password: password.trim(),
    });

    if (res.error) {
      setError("Invalid username or password");
    } else {
      router.push("/dashboard");
    }
  };

  const handleSignUp = async () => {
    setError(""); // Reset previous errors

    if (!validateInputs()) return;

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username.trim(), password: password.trim() }),
    });

    if (response.ok) {
      alert("Signup successful! You can now log in.");
    } else {
      const data = await response.json();
      setError(data.error || "User already exists");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In / Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600"
        >
          Sign In
        </button>
        <button
          onClick={handleSignUp}
          className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
