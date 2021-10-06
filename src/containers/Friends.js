import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";

export default function Friends() {
  const [friends, setFriends] = useState(null);
  useEffect(() => {
    axios
      .post("http://localhost:4000/getFriends", {
        active: false,
        balance: 2000,
      })
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        List of Friends of people who are not active and whose balance is less
        than 2000
      </Typography>
      <Grid container spacing={4} justify="center">
        {friends?.map((friend, pos) => (
          <Grid item xs={12} sm={6} md={4} key={`${friend.id}${pos}`}>
            <FriendCard friend={friend.name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
