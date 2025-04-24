// dependencies import
import axios from "axios";
import { useEffect, useState } from "react";

// styles import
import layout from '../../../styles/general-styles/general-layout.module.css';
import table from '../../../styles/general-styles/general-table.module.css';
import form from '../../../styles/general-styles/general-form.module.css';

// Api Import
const ticketURL = import.meta.env.VITE_TICKET_API;

// component import
import { Pagination } from "../components/DashboardComponents";
import { SearchBar, Dropdown } from "../components/General";