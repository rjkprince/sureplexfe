import { Grid } from "@mui/material";
import React from "react";
import PeopleCard from "./PeopleCard";

export default function ListPeople({ people }) {
  return (
    <Grid container spacing={4} justify="center">
      {people?.map((ppl) => (
        <Grid item xs={12} sm={6} md={4} key={ppl._id}>
          <PeopleCard ppl={ppl} />
        </Grid>
      ))}
    </Grid>
  );
}
