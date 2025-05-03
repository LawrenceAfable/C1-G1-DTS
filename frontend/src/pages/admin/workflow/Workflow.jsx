import layout from '../../../styles/general-styles/general-layout.module.css'

import AdminNav from "../../../components/AdminNav";
import WorkflowTable from '../../../tables/WorkFlowTable';
import { TitleCards } from '../../../components/General';

function Workflow() {
    return (
        <>
        <AdminNav/>
        <main className={layout.main}>
            <section>
                <TitleCards
                user='jessa'
                title='Workflow'/>
            </section>
            
            <section>
                <div>
                    <WorkflowTable/>
                </div>
            </section>
        </main>
      

        </>
    )
}
export default Workflow