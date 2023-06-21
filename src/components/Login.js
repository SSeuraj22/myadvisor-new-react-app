import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom'
import Background1 from '../assets/images/Background.jpg';
import Background2 from '../assets/images/Background2.jpg';
import config from '../config.json';

function Copyright() {

return (
    <Typography variant="body2" color="#0066FF" align="center">
      {'Copyright © '}
      <Link color="#0066FF" href="/">
        myAdvisor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const pictureArray = [Background1, Background2];
const randomIndex = Math.floor(Math.random() * pictureArray.length);
const selectedPicture = pictureArray[randomIndex];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${selectedPicture})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0066FF",
    color:"white",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    color:"#0066FF",
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#0066FF",
  },
}));

export default function SignInSide({setAuth,setType }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ //inputs(name of state), setInputs(function that modifies input state)
    username: "", //initial values would be empty
    password: "",
  });

  const { username, password } = inputs;

  const onChange = (e) =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    const body = {"username" : username, "password": password}
    e.preventDefault();

    try {
      const res = await fetch(`${config.host}/accounts/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      
      const parseRes = await res.json();
      
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        localStorage.setItem("user", parseRes.user);
        localStorage.setItem("username", username);
        localStorage.setItem("auth", true)
        
        setAuth(true);
        setType(parseRes.user);
        
        if (parseRes.user === "student") {

            navigate("/start");
            /*
          history.push({
            pathname: '/start',
          })
          */
        }
        else {
          window.location.reload(false);
        }
        
      } else {
        //setAuth(false);
        //toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="#0066FF">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Student ID / Username" 
              autoFocus
              value={username}
              onChange={(e) => onChange(e)}
          
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => onChange(e)}
            
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="#0066FF" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="#0066FF">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="#0066FF">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}