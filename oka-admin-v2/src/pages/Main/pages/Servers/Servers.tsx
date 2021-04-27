import classNames from 'classnames'

import ExploreIcon from '@material-ui/icons/Explore'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'

import { Box, CircleProgress, Table } from '../../components'
import data from './data'
import styles from './Servers.module.scss'

const columns = [
    {
        title: 'USAGE',
        dataIndex: 'usage',
        render: (t: number) => <CircleProgress usage={+t} />,
        width: '20px',
        className: styles.usageCol
    },
    {
        title: 'NAME',
        dataIndex: 'name',
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
    },
    {
        title: 'SSR',
        dataIndex: 'ssr',
    },

    {
        title: 'OPERATION',
        render: () => {
            return <div className={styles.btnWrapper}>
                <div className={classNames(styles.operationBtn, styles.edit)}>
                    <SettingsRoundedIcon fontSize='inherit' className={styles.settingsIcon} />
                </div>
                <div className={classNames(styles.operationBtn, styles.website)}>
                    <ExploreIcon fontSize='inherit' className={styles.settingsIcon} />
                </div>
            </div>
        }
    }
]

export const Servers = (): JSX.Element => {
    return <Box title={'Servers'}>
        <Table columns={columns} dataSource={data} />
    </Box>
}