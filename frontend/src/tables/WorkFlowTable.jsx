// dependencies import
import axios from "axios";
import { useEffect, useState } from "react";

// styles import
import layout from './components/table-layout.module.css';
import table from "./components/general-table.module.css";
import form from "./components/general-form.module.css";

// component import
import { Pagination } from "./components/tableforms";
import { SearchBar, Dropdown } from "./components/tableforms";

// Api Import
const workflowURL = import.meta.env.VITE_WORKFLOW_API;



// Table header for workflows
function TableHeader() {
  return (
    <tr className={table.tr}>
      <th className={table.th}>Workflow</th>
      <th className={table.th}>Department</th>
      <th className={table.th}>Description</th>
      <th className={table.th}>Action</th>
    </tr>
  );
}

// Single row item for a workflow
export function TableRow({ name, department, description, onManage }) {
  return (
    <tr className={table.tr}>
      <td className={table.td}>{name}</td>
      <td className={table.td}>{department}</td>
      <td className={table.td}>{description}</td>
      <td className={table.td}>
        <button className={form.btn} onClick={onManage}>
          Manage
        </button>
      </td>
    </tr>
  );
}

function WorkflowTable() {
  const [workflows, setWorkflows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    axios
      .get(workflowURL)
      .then((res) => {
        // API returns an array of workflows:
        // [{ name, department, description }, …]
        setWorkflows(res.data || []);
      })
      .catch((err) => console.error("Failed to fetch workflows", err));
  }, []);

  // pagination calculations
  const totalPages = Math.ceil(workflows.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const pagedWorkflows = workflows.slice(start, start + itemsPerPage);

  const handleManage = (wf) => {
    console.log("Manage workflow:", wf);
    // TODO: navigate or open modal with wf
  };

  return (
    <div className={layout.container}>
      <div className={form.FormContainer}>
        <Dropdown /* props as needed */ />
        <Dropdown /* props as needed */ />
        <SearchBar /* props as needed */ />
      </div>

      <div className={table.tablewrapper}>
        <table className={`${table.tablecontainer} ${table.table}`}>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {pagedWorkflows.map((wf, idx) => (
              <TableRow
                key={`${wf.name}-${idx}`}
                name={wf.name}
                department={wf.department}
                description={wf.description}
                onManage={() => handleManage(wf)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default WorkflowTable;
