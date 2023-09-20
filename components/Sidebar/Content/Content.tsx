import styles from './Content.module.scss'

export const Content =  ({title, children}: any) => {
    return (
        <div className={styles.content}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}