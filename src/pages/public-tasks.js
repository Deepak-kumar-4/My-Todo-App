import { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa"; // Import task icon

export default function PublicTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/public-tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(); // Fetch immediately when the page loads
    const interval = setInterval(fetchTasks, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 flex items-center gap-2 mb-6">
        <FaTasks className="text-blue-500" /> Public Tasks
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          </div>
        ) : tasks.length > 0 ? (
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="p-4 bg-gray-50 shadow-md rounded-lg flex items-center justify-between transition hover:bg-gray-100"
              >
                <p className="text-gray-800">{task.text}</p>
                <span className="text-xs text-gray-500">#{index + 1}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No tasks available.</p>
        )}
      </div>
    </div>
  );
}
