import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Form from './form';
import ReactDOM from 'react-dom';
import calculate from './calculate';

const Result = () => {
  const classes = useStyles();
  const [country, getCountry] = useState('');
  const [year, getYear] = useState('');
  const [amount, getAmount] = useState('');
  const [result, getResult] = useState([]);

  useEffect(async () => {
    await calculate();
    await getAmount(sessionStorage.getItem('amount'));
    await getCountry(sessionStorage.getItem('country'));
    await getYear(sessionStorage.getItem('year'));
    await getResult(JSON.parse(sessionStorage.getItem('tax')));
  }, []);

  const back = () => {
    sessionStorage.clear();
    ReactDOM.render(<Form />, document.getElementById('root'));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={10} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography className={classes.title} component="h1" variant="h5">
            Your Tax Results
          </Typography>

          <form>
            <InputLabel className={classes.form}>
              Select your country of residence
            </InputLabel>
            <TextField
              disabled
              className={classes.form}
              value={country}
              variant="filled"
            />

            <InputLabel className={classes.form}>
              Select an income year
            </InputLabel>
            <FormControl fullWidth className={classes.form}>
              <TextField disabled value={year} variant="filled" />
            </FormControl>

            <InputLabel className={classes.form}>
              Enter your total taxable income for the income year
            </InputLabel>
            <FormControl fullWidth className={classes.form}>
              <FilledInput
                value={amount}
                notched={false}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">.00</InputAdornment>
                }
                disabled
              />
            </FormControl>
            <Link href="#" className={classes.link} onClick={() => back()}>
              Go back to previous screen
            </Link>
          </form>
        </div>
      </Grid>
      <CssBaseline />
      <Grid
        item
        xs={30}
        sm={10}
        md={5}
        className={classes.image}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.moonRight} />
        <div className={classes.paper}>
          <div className={classes.paper2}>
            <InputLabel className={classes.form2}>
              Your estimated Taxable income is
            </InputLabel>
            <FormControl fullWidth variant="outlined" className={classes.form}>
              <FilledInput
                readOnly
                startAdornment={
                  <InputAdornment position="start">
                    <div className={classes.taxValue}>
                      ${result[2] > 0 ? result[2] : '0'}
                    </div>
                  </InputAdornment>
                }
                notched={false}
              />
            </FormControl>
            <InputLabel className={classes.form2}>Breakdown</InputLabel>
            <FormControl fullWidth variant="outlined" className={classes.form}>
              <FilledInput
                readOnly
                notched={false}
                startAdornment={
                  <InputAdornment position="start">$0 - $18000</InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <div className={classes.inputValue}>$0</div>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" className={classes.form}>
              <FilledInput
                readOnly
                notched={false}
                startAdornment={
                  <InputAdornment position="start">
                    $18,001 - $45,000
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <div className={classes.inputValue}>
                      ${result[3] > 0 ? result[3] : 0}
                    </div>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" className={classes.form}>
              <FilledInput
                readOnly
                notched={false}
                startAdornment={
                  <InputAdornment position="start">
                    $45,001-$120,000
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <div className={classes.inputValue}>
                      ${result[4] > 0 ? result[4] : 0}
                    </div>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" className={classes.form}>
              <FilledInput
                readOnly
                notched={false}
                startAdornment={
                  <InputAdornment position="start">
                    $120,000 - $180,000
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <div className={classes.inputValue}>
                      ${result[5] > 0 ? result[4] : 0}
                    </div>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" className={classes.form}>
              <FilledInput
                readOnly
                notched={false}
                startAdornment={
                  <InputAdornment position="start">$180,000+</InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <div className={classes.inputValue}>
                      ${result[6] > 0 ? result[6] : 0}
                    </div>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    font: 'Lato',
    color: '#000000',
    overflow: 'hidden'
  },
  image: {
    backgroundColor: '#8477C9',
    backgroundSize: '20%',
    backgroundPosition: 'center',
    zIndex: 0,
    boxShadow: '0px 4px 4px #E7E7FF',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  moonRight: {
    zIndex: 1,
    position: 'relative',
    borderRadius: '60%',
    width: '60%',
    right: '20%',
    top: '70%',
    height: '40%',
    background:
      'linear-gradient(210.38deg, #E7E6FF -90.73%, rgba(231, 230, 255, 0) 70.05%)'
  },
  circleRight: {
    zIndex: 1,
    borderRadius: '50%',
    background: '#E7E7FF',
    boxShadow: '-10px 13px 3px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    width: '7%',
    height: '6%',
    right: '-25%',
    top: '30%'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paper2: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-55%',
    marginLeft: '-20%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    font: 'Lato',
    color: '#000000'
  },
  form2: {
    width: '100%', // Fix IE 11 issue.
    fontWeight: 'bold',
    font: 'Lato',
    color: '#FFFFFF',
    marginTop: theme.spacing(5)
  },
  title: {
    fontWeight: 'bold',
    font: 'Lato',
    color: '#000000'
  },
  inputValue: {
    font: 'Lato',
    color: '#8477C9'
  },
  taxValue: {
    font: 'Lato',
    color: '#8477C9',
    fontWeight: 'bold',
    fontSize: '30px'
  }
}));

export default Result;
