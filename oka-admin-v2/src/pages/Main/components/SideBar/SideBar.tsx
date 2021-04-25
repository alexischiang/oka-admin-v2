import styles from './SideBar.module.scss'

interface SideBarProps {
    navList: string[];
}

export const SideBar = ({ navList }: SideBarProps): JSX.Element => {
    return <div className={styles.root}>

    </div>
}