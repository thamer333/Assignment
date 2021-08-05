import './style.css';
import { TextField, Button } from '@material-ui/core';
import{ useEffect, useState } from 'react';
import { Get } from '../../services/api.service';
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
  const { id } = useParams();
  const classes = useStyles();
  const [data, setData] = useState(null);
  useEffect(() => {
    Get('/Assignment/' + id).then(res => {
      // TODO uncomment the line below and pass the data object to setData
      // setData(res);
    })
 }, []);

  return (
    <div style={{padding: '40px'}}>
        <form className={classes.root} autoComplete="off">
          <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
              variant="outlined"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="outlined"
            />
      </form>

      <div>
      <Button variant="contained" color="primary">
        Submit
      </Button>
      </div>
    </div>
  );
};
