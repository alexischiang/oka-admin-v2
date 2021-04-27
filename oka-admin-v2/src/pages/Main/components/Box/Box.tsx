import styles from './Box.module.scss'

interface BoxProps {
    title: string;
    children: React.ReactNode;
}

export const Box = ({ title, children }: BoxProps): JSX.Element => {
    return <div className={styles.root}>
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.children}>
            {children}
        </div>
    </div>
}