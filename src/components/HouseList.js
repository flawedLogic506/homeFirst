import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import style from '../styles/houselist.module.scss';

const HouseList = () => (
  <div>
    <TextField
        id="outlined-search"
        label="Search field"
        className={style.input}
        type="search"
        margin="normal"
        variant="outlined"
      />
    <Button variant="contained">Submit</Button>
  </div>
);

export default HouseList;