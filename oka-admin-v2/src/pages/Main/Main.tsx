import Grid from '@material-ui/core/Grid'

import { SideBar } from './components'
import styles from './Main.module.scss'

export const Main = (): JSX.Element => {
    const navList = ['账单列表', '客户列表', '服务器列表']

    return <div className={styles.root}>
        <Grid container className={styles.body} spacing={2}>
            <Grid item xs={2}>
                <SideBar navList={navList} />
            </Grid>
            <Grid item xs>

            </Grid>
        </Grid>
    </div>
}