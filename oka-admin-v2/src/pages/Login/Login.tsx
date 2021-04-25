import { useState } from 'react'
import { useHistory } from 'react-router'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import loginBg from '../../assets/login_bg.jpg'

const useStyles = makeStyles((theme) => ({
	container:{
		position:'relative',
		top:'45%',
		transform:'translateY(-50%)'
	},
	background: {
		width:'100%',
		height:'100vh',
		backgroundImage: `url(${loginBg})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor:'white',
		padding:theme.spacing(3),
		borderRadius:'5px',
		boxShadow:'0 0.125rem 0.75rem rgb(18 20 22 / 25%)',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	title: {
		fontWeight: 700,
		letterSpacing: '-1px'
	}
}));

export const Login = (): JSX.Element => {
	const history = useHistory()

	const [account, setAccount] = useState('')
	const [pwd, setPwd] = useState('')

	const classes = useStyles();

	return <div className={classes.background}>
		<Container component="main" maxWidth="xs" className={classes.container}>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h4" className={classes.title}>
					𝙊𝙆𝘼 𝙉𝙚𝙩𝙬𝙤𝙧𝙠
			</Typography>
				<Typography component="h1" variant="subtitle1">
					version 2.0
			</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						size='small'
						label="Account"
						autoFocus
						value={account}
						onChange={(e) => setAccount(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						size='small'
						required
						fullWidth
						label="Password"
						type="password"
						value={pwd}
						onChange={(e) => setPwd(e.target.value)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={()=> history.push('/main')}
					>
						Login
					</Button>
				</form>
			</div>
		</Container>
	</div>
}