import {Sidebar} from '@/components/Sidebar/Sidebar'
import styles from './page.module.scss'
import {DomainList} from '@/components/DomainList/DomainList'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className='row'>
                <Sidebar />
                <DomainList />
            </div>
        </div>
    )
}
