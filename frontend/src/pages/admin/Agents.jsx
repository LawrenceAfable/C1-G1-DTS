// styles
import page from '../../styles/admin-agent-styles/page.module.css'
import layout from '../../styles/general-styles/general-layout.module.css'

// component
import AdminNav from "../../components/AdminNav";
import { SearchBar, Dropdown} from "./components/General";
import AgentTable from './tables/AgentTable';


// components
import { TitleCards } from "./components/General";
function Agents() {
    return(<>
    <AdminNav/>
    <main className={layout.main}>
        <section classname={page.section1}>
            <br/>
            <TitleCards
            user='jessa'
            title='Agents'/>
        </section>
        <br/>

        <section lassname={page.section2}>
            <AgentTable/>
        </section>
    </main>
    </>);
}

export default Agents