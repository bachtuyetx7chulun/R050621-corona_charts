import { Grid, TextField } from "@material-ui/core";
import React from "react";

export default function Statistic() {
  return (
    <Grid style={{ marginTop: "1rem" }} container spacing={3}>
      <Grid item sm={4} xs={12}>
        Person affected: <strong>3000</strong>
      </Grid>
      <Grid item sm={4} xs={12}>
        Person died: <strong>3000</strong>
      </Grid>
      <Grid item sm={4} xs={12}>
        Person cured: <strong>3000</strong>
      </Grid>
    </Grid>
  );
}
