# TaskTempo

![site overview](https://i.postimg.cc/mkmNmTwW/localhost-5173.png)

## 📋 Project Overview

TaskTempo is a dynamic task management solution tailored for freelancers and clients, enabling efficient task posting, discovery, and handling. With robust authentication, complete CRUD functionality, and an intuitive design, it streamlines task collaboration.

## ✨ Key Features

- **Secure Authentication System** - Email/password and Google login with firebase
- **Task Management** - Complete CRUD operations for creating, reading, updating, and deleting tasks with detailed information
- **Personal Dashboard** - Users can view and manage their posted tasks with dedicated "My Posted Tasks" section
- **Interactive Bidding System** - Track bid counts and user engagement on task details pages
- **Responsive Design** - Fully responsive interface with dark/light theme toggle functionality
- **Protected Routes** - Only logged-in users can access add/edit/delete/update functionalities.

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **Deployment:** Vercel and Netlify

## Additional Libraries and npm packages:

- React Router for navigation
- React Toastify and Sweet Alert for notifications
- Date picker for deadline selection
- Animation libraries (React Typewriter)
- React Icons

# Getting Started

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/neyamat7/task-tempo.git
cd task-tempo
```

### 2. Install Dependencies

```bash
npm install
```

## Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will run on `http://localhost:5173` (default Vite port)

### Production Build

Build the project for production:

```bash
npm run build

```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 🌐 Live Link

**[TaskTempo Live Site](https://task-tempo.netlify.app/)**
