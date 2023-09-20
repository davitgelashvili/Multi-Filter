import {Categories} from './Content/Categories/Categories'
import {Content} from './Content/Content'
import {DomainZone} from './Content/DomainZone/DomainZone'
import {Price} from './Content/Price/Price'
import {Symbols} from './Content/Symbols/Symbols'
import styles from './Sidebar.module.scss'

export const Sidebar =  () => {
    return (
        <div className={styles.sidebar}>
            <Content title={'ფასი'}>
                <Price />
            </Content>
            <Content title={'სიმბოლოების რაოდონობა'}>
                <Symbols />
            </Content>
            <Content title={'კატეგორიები'}>
                <Categories />
            </Content>
            <Content title={'დომენის ზონა'}>
                <DomainZone />
            </Content>
        </div>
    )
}