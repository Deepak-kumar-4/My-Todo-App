import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Todo() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingTask, setEditingTask] = useState(null);
    const [editedText, setEditedText] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            try {
                const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
                setTasks(storedTasks);
            } catch (error) {
                setError("Failed to load tasks. Please try again.");
            } finally {
                setLoading(false);
            }
        }, 2000); // Simulating a 2-second delay
    }, []);


    useEffect(() => {
    if (tasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
     }
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: newTask }]);
        setNewTask("");
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const startEditing = (task) => {
        setEditingTask(task.id);
        setEditedText(task.text);
    };

    const saveEdit = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: editedText } : task));
        setEditingTask(null);
    };

    if (status === "loading" || loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                <p className="mt-3 text-xl text-gray-600">Loading...</p>
            </div>
        );
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Your To-Do List</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4 flex gap-2">
                <input 
                    type="text" 
                    className="p-2 border rounded" 
                    placeholder="Add a new task" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={addTask}>Add</button>
            </div>
            <ul className="w-full max-w-md">
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow">
                        {editingTask === task.id ? (
                            <input 
                                type="text" 
                                className="p-1 border rounded"
                                value={editedText} 
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                        ) : (
                            <span>{task.text}</span>
                        )}
                        <div className="flex gap-2">
                            {editingTask === task.id ? (
                                <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => saveEdit(task.id)}>Save</button>
                            ) : (
                                <button className="px-2 py-1 bg-yellow-500 text-white rounded" onClick={() => startEditing(task)}>Edit</button>
                            )}
                            <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => signOut()}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
                Logout
            </button>
        </div>
    );
}
