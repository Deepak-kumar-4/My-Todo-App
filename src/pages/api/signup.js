import fs from "fs";
import path from "path";

const usersFile = path.join(process.cwd(), "data", "users.json");

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Invalid data" });

  const users = fs.existsSync(usersFile) ? JSON.parse(fs.readFileSync(usersFile, "utf-8")) : [];

  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ error: "User already exists" });
  }

  users.push({ username, password });
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.status(201).json({ message: "User created" });
}
