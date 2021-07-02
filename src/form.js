import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Result from './result';
import ReactDOM from 'react-dom';

const Form = () => {
  const classes = useStyles();
  const border = useOutlinedInputStyles();
  const [country, setCountry] = React.useState('');
  const [year, setYear] = React.useState('');
  const taxyears = ['2020 - 2021'];
  const countries = ['Australia'];
  const [amount, setAmount] = React.useState('');

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleYearChange = event => {
    setYear(event.target.value);
  };

  const handleSubmit = () => {
    sessionStorage.setItem('country', country);
    sessionStorage.setItem('year', year);
    sessionStorage.setItem('amount', amount);
    ReactDOM.render(<Result />, document.getElementById('root'));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <h2 className={classes.imageTitle}>Tax-o-tran</h2>
        <h2 className={classes.imageText}>
          The free and simple online tax calculator.
        </h2>
        <div className={classes.moon} />
        <div className={classes.circle} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography className={classes.title} component="h1" variant="h5">
            Calculate your tax
          </Typography>
          <form
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <OutlinedInput
              variant="outlined"
              className={border.cssOutlinedInput}
              startAdornment={
                <InputAdornment position="start" className={classes.iconColor}>
                  <InfoOutlinedIcon className={classes.iconColor} /> &nbsp;
                  Fields marked with * are mandotory
                </InputAdornment>
              }
              fullWidth
              disabled
            />
            <InputLabel className={classes.form} required>
              Select your country of residence
            </InputLabel>
            <FormControl variant="outlined" className={classes.form}>
              <Select required native value={country} onChange={handleChange}>
                <option aria-label="None" value="" />
                {countries.map(country => {
                  return <option value={country}>{country}</option>;
                })}
              </Select>
            </FormControl>

            <InputLabel className={classes.form} required>
              Select an income year
            </InputLabel>
            <FormControl fullWidth variant="outlined" className={classes.form}>
              <Select required native value={year} onChange={handleYearChange}>
                <option aria-label="None" value="" />
                {taxyears.map(year => {
                  return <option value={year}>{year}</option>;
                })}
              </Select>
            </FormControl>

            <InputLabel className={classes.form} required>
              Enter your total taxable income for the income year
            </InputLabel>
            <FormControl fullWidth variant="outlined" className={classes.form}>
              <OutlinedInput
                required
                value={amount}
                type="number"
                onChange={handleAmountChange}
                notched={false}
                placeholder="Amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">.00</InputAdornment>
                }
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Calculate
            </Button>
          </form>
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
  notchedOutline: {
    borderColor: '#8477C9'
  },
  image: {
    backgroundColor: '#8477C9',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: '20%',
    backgroundPosition: 'center',
    zIndex: 0,
    boxShadow: '0px 4px 4px #E7E7FF',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  imageTitle: {
    zIndex: 1,
    position: 'relative',
    position: 'center',
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '60px',
    marginTop: '30%',
    marginLeft: '33%'
  },
  imageText: {
    zIndex: 1,
    position: 'relative',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    marginLeft: '28%',
    color: '#FFFFFF'
  },
  moon: {
    zIndex: 1,
    position: 'relative',
    borderRadius: '60%',
    width: '60%',
    left: '-20%',
    bottom: '-10%',
    height: '40%',
    background:
      'linear-gradient(210.38deg, #E7E6FF 10.73%, rgba(231, 230, 255, 0) 84.05%)'
    // marginLeft: '0%'
  },
  circle: {
    zIndex: 1,
    borderRadius: '50%',
    background: '#E7E7FF',
    boxShadow: '-10px 13px 3px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    width: '5%',
    height: '5%',
    left: '30%',
    bottom: '25%'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
    font: 'Lato'
  },
  compulsary: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
    font: 'Lato',
    borderColor: '#8477C9'
  },
  title: {
    fontWeight: 'bold',
    font: 'Lato',
    color: '#000000'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#8477C9',
    color: 'white',
    fontWeight: 'bold',
    font: 'Lato'
  },
  iconColor: {
    color: '#8477C9',
    fontWeight: 'bold',
    font: 'Lato'
  }
}));

const useOutlinedInputStyles = makeStyles(theme => ({
  cssOutlinedInput: {
    $notchedOutline: {
      border: '2px solid #8477C9',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 8px #E7E7FF',
      borderRadius: '5px',
      borderColor: `${theme.palette.primary.main} !important`
    }
  },

  cssFocused: {}
}));

export default Form;
