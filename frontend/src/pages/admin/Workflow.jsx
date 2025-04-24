import styles from '../../styles/admin-styles/workflow.module.css'
import form from '../../styles/general-styles/general-form.module.css'

import AdminNav from "../../components/AdminNav";
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

        <textarea name="" id=""></textarea>
        <br/>
        <button className={form.btn}>button</button>
        <br/>
        <button className={`${form.circlebutton} ${form.btn}`}>
            1
        </button>
        <br/>
        <input type="text" />

        </>
    )
}
export default Workflow