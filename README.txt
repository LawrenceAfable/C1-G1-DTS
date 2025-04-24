// Setup JSON Server 

-- How to run?
npx json-server --watch public/db.json --port 5000

// Installed Dependencies
- react-router-dom
- font-awesome 

# To create.env
cd frontend
cp .env.example .env

# Default port is now :1000, i.e. localhost:1000
To modify, edit vite.config.json

# Admin File Structing
- Navbar Component is inserted directly on the page
- pages/admin is the main admin directory
        -   components
        -   tables
    - Agents.jsx
    - archive.jsx
    - Dashboard.jsx
    - Workflow.jsx
- CSS Styles in admin-Styles
- Has added general-styles for general applications of styling

- has used index.css for global styles