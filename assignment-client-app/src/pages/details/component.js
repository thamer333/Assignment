import React from 'react';
import './style.css';
import { TextField, Button, RadioGroup, FormControlLabel, FormLabel, Radio, InputLabel, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Get, Post } from '../../services/api.service';
import { useHistory } from 'react-router-dom';


import {
  useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const Details = () => {
  const [fullName, setName] = useState('');
  const fullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [genderValue, setValue] = React.useState('1');

  const genderHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [birthdateValue, setDate] = useState();
  const birthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const [numberOfKidsValue, setNumber] = useState();
  const numberOfKidsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const [hearAboutUsValue, sethearAboutUsValue] = React.useState();

  const hearAboutUsrHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    sethearAboutUsValue(event.target.value);
  };
  const { id } = useParams();
  const classes = useStyles();
  const [data, setData] = useState(null);
  useEffect(() => {
    Get('/Assignment/' + id).then(res => {

    })
  }, []);

  const history = useHistory();

  function Submit() {

    const body = {
      id: 0,
      fullName: fullName,
      gender: +genderValue,
      birthdate: birthdateValue,
      numberOfKids: +numberOfKidsValue,
      hearAboutUs: +hearAboutUsValue
    };
    console.log(body);

    Post('/Assignment', body).then(res => {
      console.log(res);
      history.push('/')
    })
  };
  return (
    <div style={{ padding: '40px' }}>

      <form className={classes.root} autoComplete="off">
        <div style={{ width: '100%', float: 'left' }}>

          <div style={{ width: '50%', float: 'left' }}>
            <TextField
              style={{ width: '90%' }}
              required
              value={fullName}
              onChange={fullNameChange}
              id="fullName"
              label="Full Name"
              variant="outlined"
            />
          </div>

          <div style={{ width: '50%', float: 'left' }}>
            <div style={{ width: '90%' }}>

              <FormLabel component="legend">Gender</FormLabel>

              <RadioGroup id="gender" aria-label="gender" name="gender1"
                value={genderValue}
                onChange={genderHandleChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="Male" />
                <FormControlLabel value="2" control={<Radio />} label="Female" />
              </RadioGroup>
            </div>
          </div>
        </div>
        <div style={{ width: '100%', float: 'left' }}>

          <div style={{ width: '50%', float: 'left' }}>
            <TextField
              style={{ width: '90%' }}
              required
              id="birthdate"
              label="Birthdate"
              type="date"
              variant="outlined"
              defaultValue="1990-01-01"
              value={birthdateValue}
              onChange={birthdateChange}
            />
          </div>
          <div style={{ width: '50%', float: 'left' }}>
            <TextField
              id="numberOfKids"
              label="Number of kids"
              type="number"
              required
              variant="outlined"
              style={{ width: '90%' }}
              value={numberOfKidsValue}
              onChange={numberOfKidsChange}
            />
          </div>
        </div>

        <div style={{ width: '100%', float: 'left' }}>

          <div style={{ width: '50%', float: 'left' }}>
            <InputLabel style={{ width: '90%' }} htmlFor="outlined-age-native-simple">How do you hear about us ?</InputLabel>
            <Select
              style={{ width: '90%' }}
              native
              label="How do you hear about us ?"
              id="hearAboutUs"
              required
              value={hearAboutUsValue}
              onChange={hearAboutUsrHandleChange}
            >
              <option value={1}>Google</option>
              <option value={2}>TV</option>
              <option value={3}>Radio</option>
              <option value={4}>Social Network</option>
            </Select>
          </div>
        </div>
        <br />
        <div >
          <Button variant="contained" color="primary" style={{ marginTop: 40 }} onClick={() => { Submit() }}>
            Submit
          </Button>
        </div>
      </form>


    </div>
  );
};
