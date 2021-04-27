import { Table as AntTable } from 'antd'

import styles from './Table.module.scss'

interface TableProps {
    columns: any[];
    dataSource: any[];
}

export const Table = (props: TableProps): JSX.Element => {
    const { columns, dataSource } = props

    return <div className={styles.table}>
        <AntTable
            columns={columns}
            dataSource={dataSource}
            pagination={false}
        />
    </div>
}