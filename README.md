# Next.js To-Do Application

## Overview

This is a fully functional **To-Do Application** built with **Next.js** that includes authentication, task management, and real-time updates. The app demonstrates **server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR)** while being styled with **Tailwind CSS** and deployed on **Vercel**.

## Features

✅ **User Authentication** (NextAuth - Credentials Provider)  
✅ **Protected Routes** for To-Do Dashboard  
✅ **Add, Edit, View, and Delete Tasks**  
✅ **Public Tasks Page with Real-Time Updates**  
✅ **Data Fetching** (SSG, ISR, SSR)  
✅ **Styled with Tailwind CSS and Custom Theme**  
✅ **Deployed on Vercel**

## Installation & Setup

To run the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install  # or yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the necessary environment variables (if applicable).

### 4. Run the Development Server

```bash
npm run dev  # or yarn dev
```

The app will be running at **[http://localhost:3000](http://localhost:3000)**.

## Deployment

The project is deployed on **Vercel**. You can check the live version here:  
🔗 **[Live Demo](https://your-vercel-app.vercel.app/)**

### Deploy on Vercel

To deploy your own version on **Vercel**, follow these steps:

1. Push your project to **GitHub**.
2. Go to **[Vercel](https://vercel.com/)** and create an account.
3. Import your GitHub repository.
4. Click **Deploy** and wait for the build to complete.

## Folder Structure

```
📦 Project Root
├── 📂 src
│   ├── 📂 pages              # Next.js pages (routes)
│   │   ├── 📂 api            # Backend API routes (Next.js serverless functions)
│   │   │   ├── 📂 auth       # Authentication-related API routes
│   │   ├── about.js          # About page
│   │   ├── auth.js           # Authentication page
│   │   ├── dashboard.js      # User dashboard
│   │   ├── index.js          # Home page
│   │   ├── login.js          # Login page
│   │   ├── public-tasks.js   # Public tasks page
│   │   ├── todo.js           # To-Do page
│   │   ├── _app.js           # Custom App component
│   │   ├── _document.js      # Custom Document component
│   ├── 📂 styles             # Tailwind CSS configurations
│
├── .gitignore                # Ignored files for Git
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
├── next.config.js            # Next.js configuration
```

## Contributing

If you'd like to contribute, feel free to **fork** this repository, make your changes, and submit a **pull request**.

## License

This project is open-source and available under the **MIT License**.

---

🔥 Built with **Next.js** & ❤️ by Deepak Kumar B
