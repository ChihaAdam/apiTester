# API Tester

## Overview

API Tester is a simple web application built with React and TypeScript that allows users to test RESTful API endpoints directly from their browser. Its design is minimal and user-friendly, enabling quick requests and response inspection for developers who need a lightweight API testing tool.

You can try it online at: [api-tester-pink.vercel.app](https://api-tester-pink.vercel.app)

## Features

- **Send HTTP Requests:** Supports GET, POST, PUT, PATCH, and DELETE methods.
- **Custom Headers:** Add, remove, and edit request headers as needed.
- **Request Body:** Enter JSON body for relevant HTTP methods (disabled for GET/DELETE).
- **Live Response Display:** View server responses instantly, including status and body.
- **Dark Mode:** Toggle between light and dark themes for comfortable viewing.
- **Resizable Panels:** Adjust request and response sections for better workflow.
- **Error Handling:** See detailed error messages if requests fail.

## How It Works

1. Enter the API endpoint URL you wish to test.
2. Choose the desired HTTP method.
3. Optionally, configure headers and body (for POST/PUT/PATCH).
4. Click to send the request and view the response.

All request logic is handled client-side using React hooks, with no backend processing by this app.

## Tech Stack

This project is built on a modern frontend stack:

- **React**: Fast and composable UI for building interactive interfaces.
- **TypeScript**: Type safety across all components and business logic.
- **Zustand**: For state management (stores for body, headers, method) instead of Context API.
- **shadcn/ui**: For elegant and accessible UI components, such as buttons, inputs, resizable panels, selects, and more.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design.
- **Lucide Icons**: For SVG icons (such as dark mode toggle).

No backend or database is used. All features run entirely in the browser.

## Honest Status

This project is a personal tool for quickly testing RESTful APIs. It is not a replacement for advanced tools like Postman or Insomnia. There is no authentication, history, or environment support. It is intended for simple, direct API testing, and may lack features required for more complex scenarios.

> **Note:** API Tester is created primarily for learning and experimentation. It serves as a practical exercise in modern frontend development, component architecture, and state management. While it is fully functional for basic API testing, its main purpose is educational—to explore, practice, and demonstrate contemporary web development techniques.
>
> As with any learning-focused project, API Tester may contain some bugs or limitations. Feedback and contributions are always welcome!

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/ChihaAdam/apiTester.git
cd apiTester
npm install
npm run dev
```

## License

This project currently does not specify a license.
