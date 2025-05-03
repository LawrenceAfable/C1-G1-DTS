import layout from '../../../styles/general-styles/general-layout.module.css'

import AdminNav from "../../../components/AdminNav";

import { TitleCards } from "../../../components/General";
import ArchiveTable from '../../../tables/ArchiveTable';

function AdminArchive() {
    return (
        <>
        <AdminNav/>
        <main className={layout.main}>
            <section>
                <TitleCards
                user='jessa'
                title='Archive'/>
            </section>
            <section>
                <div>
                    <ArchiveTable/>
                </div>
            </section>
        </main>
        </>
    )
}


export default AdminArchive