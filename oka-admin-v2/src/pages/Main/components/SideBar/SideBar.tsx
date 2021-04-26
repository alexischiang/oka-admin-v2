import { useHistory } from 'react-router'

import styles from './SideBar.module.scss'

const classNames = require('classnames')

interface SideBarProps {
    navList: {
        name: string;
        icon: JSX.Element;
    }[];
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

export const SideBar = ({ navList, current, setCurrent }: SideBarProps): JSX.Element => {
    const history = useHistory()

    const onClickItem = (target: number) => {
        setCurrent(target)
        history.push(`/main/${navList[target].name.toLowerCase()}`)
    }

    return <div className={styles.root}>
        <div className={styles.title}>
            oka network
        </div>

        <div className={styles.subTitle}>MENU</div>

        <div className={styles.navItemWrapper}>
            {
                navList.map((nav, index) => {
                    return <div className={classNames({
                        [styles.navItem]: true,
                        [styles.active]: index == current
                    })}
                        onClick={() => onClickItem(index)}
                    >
                        {nav.icon}
                        {nav.name}
                    </div>
                })
            }
        </div>

    </div>
}