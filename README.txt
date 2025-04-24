// Setup JSON Server 

-- How to run?
npx json-server --watch public/db.json --port 5000

// Installed Dependencies
- react-router-dom
- font-awesome 


# To create.env
cd frontend
cp .env
add to env
VITE_TICKET_API=http://192.168.100.6:5000/tickets
VITE_WORKFLOW_API=http://192.168.100.6:5000/workflow
VITE_ARCHIVE_API=http://192.168.100.6:5000/archive

