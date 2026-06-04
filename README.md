# Todo List

A clean and responsive todo list built with React and Tailwind CSS. It helps you create, edit, complete, and delete tasks while automatically saving them in your browser.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- View total and completed task counts
- Save tasks in local storage
- Responsive design for mobile and desktop
- Modern Tailwind CSS interface

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Context API
- Browser Local Storage

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) on your computer.

### Installation

```bash
git clone <your-repository-url>
cd todo_list
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Checks the project for linting issues.

## Project Structure

```text
src/
|-- Components/
|   |-- TodoForm/
|   `-- TodoItem/
|-- context/
|   `-- TodoContext.js
|-- App.jsx
|-- index.css
`-- main.jsx
```

## How It Works

Tasks are managed through React Context and stored in the browser's local storage. Your tasks remain available after refreshing or reopening the app in the same browser.

## License

This project is open source and available for learning and personal use.
