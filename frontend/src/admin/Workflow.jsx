import styles from '../styles/admin-styles/workflow.module.css'

import AdminNav from "../components/AdminNav";
import { TitleCards } from './components/General';

function Workflow() {
    return (
        <>
        <AdminNav/>
        <section>
            <TitleCards
            user='jessa'
            title='Workflow'/>
        </section>
        </>
    )
}
export default Workflow