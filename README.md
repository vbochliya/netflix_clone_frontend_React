# Netflix Frontend

This is the frontend part of a Netflix clone project. It is built using React and Vite.

## Project Structure

```plaintext
project-root/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── Banner/
│   │   │   ├── Banner.jsx
│   │   │   └── Banner.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Row/
│   │       ├── Row.jsx
│   │       └── Row.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   ├── axios.js
│   └── request.js
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone /home/vikash/Desktop/gcms/netflix-gc/netflix_frontend
    ```
2. Navigate to the project directory:
    ```bash
    cd netflix_frontend
    ```
3. Install the dependencies:
    ```bash
    npm install
        or
    npm install --force
    ```

### Running the Project

To start the development server, run:
```bash
npm run dev
```

### Building the Project

To build the project for production, run:
```bash
npm run build
```

