import styles from './ExpandButton.module.scss'

interface ExpandButtonProps {
    icon: React.ReactNode;
    label: string;
    color: string;
}

export const ExpandButton = ({ icon, label, color }: ExpandButtonProps): JSX.Element => {
    return <div className={styles.expandButton}>

    </div>
}