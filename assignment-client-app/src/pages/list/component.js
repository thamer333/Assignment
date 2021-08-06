import './style.css';
import { DataGrid, GridCellParams } from '@material-ui/data-grid';
import { TextField, Button } from '@material-ui/core';

import { useEffect, useState } from 'react';
import { Get, DeleteById } from '../../services/api.service';
import { Switch, Route, Link } from 'react-router-dom';
import { Details } from '../details/component';
import { useHistory } from 'react-router-dom';





export const routes = {
  DETAILS: '/:id',
};
export const List = () => {
  const history = useHistory();

  const columns = [
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 250,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 150,
      valueGetter: getGender,
    },
    {
      field: 'birthdate',
      headerName: 'Dirthdate',
      width: 200,

    },
    {
      field: 'numberOfKids',
      headerName: 'Number Of Kids',
      width: 200,
    },
    {
      field: 'hearAboutUs',
      headerName: 'How hear about us',
      width: 250,
      valueGetter: getHearAboutUs
    },
    {
      field: 'id',
      headerName: 'Delete',
      width: 150,
      renderCell: (params: GridCellParams) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => { DeleteItem(params.value) }}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  function getGender(params) {
    return params.row.gender == 1 ? 'Male' : 'Female';
  }
  function getHearAboutUs(params) {
    return params.row.hearAboutUs == 1 ? 'Google' : params.row.hearAboutUs == 2 ? 'TV' : params.row.hearAboutUs == 3 ? 'Radio' : 'Social Network';
  }

  const [rows, setData] = useState([]);
  useEffect(() => {
    Get('/Assignment').then(res => {
      setData(res);

    })

  }, []);
  function DeleteItem(id) {

    DeleteById('/Assignment', id).then(res => {
      window.location.reload();
    });
  };
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}

      />
      <div style={{ paddingTop: 5 }}>
        <Link to={routes.DETAILS}>Add new item</Link>

        <Switch>
          <Route exact path={routes.DETAILS} component={Details} />
        </Switch>
      </div>

    </div>

  );
};
