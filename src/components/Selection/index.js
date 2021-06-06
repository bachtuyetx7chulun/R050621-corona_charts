import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function GeoSelection({ data }) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const insertData = () => {
      setCountries(data);
    };

    insertData();
  }, [data]);

  const generateCountries = () => {
    return countries.map((country, index) => {
      return (
        <MenuItem key={index} value={country.ISO2}>
          {country.Country}
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <p>Choose country: {value}</p>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="">Country</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {generateCountries()}
        </Select>
      </FormControl>
    </div>
  );
}
