import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded'
import DnsRoundedIcon from '@material-ui/icons/DnsRounded'

import { SideBar } from './components'
import styles from './Main.module.scss'
import { Dashboard } from './pages'

export const Main = (): JSX.Element => {
    const navList = [
        {
            name: 'Dashboard',
            icon: <DashboardRoundedIcon />
        },
        {
            name: 'Orders',
            icon: <AccountCircleRoundedIcon />
        },
        {
            name: 'Servers',
            icon: <DnsRoundedIcon />
        }
    ]

    const [current, setCurrent] = useState(0)

    return <div className={styles.root}>
        <Grid container className={styles.body}>
            <Grid item xs={2}>
                <SideBar navList={navList} current={current} setCurrent={setCurrent} />
            </Grid>
            <Grid item xs>
                <div className={styles.routeArea}>
                    <Switch>
                        <Route path='/main/dashboard' component={Dashboard} />

                    </Switch>
                </div>
            </Grid>
        </Grid>
    </div>
}