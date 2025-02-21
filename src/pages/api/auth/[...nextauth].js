import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import fs from "fs";
import path from "path";

// Path to the local user database (JSON file)
const usersFile = path.join(process.cwd(), "data", "users.json");

// Function to read user data
const getUsers = () => {
  if (!fs.existsSync(usersFile)) return [];
  const usersData = fs.readFileSync(usersFile, "utf-8");
  return JSON.parse(usersData);
};

// Function to add a new user
const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = getUsers();
        const user = users.find((u) => u.username === credentials.username);
        if (user && user.password === credentials.password) {
          return { id: user.username, name: user.username };
        }
        throw new Error("Invalid username or password");
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  },
  secret: "your-secret-key",
});
