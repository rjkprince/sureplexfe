import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PeopleCard({ ppl }) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ppl.name}
          </Typography>
          <Typography gutterBottom variant="body1">
            Email:{" "}
            <Typography variant="body1" color="textSecondary" component="span">
              {ppl.email}
            </Typography>
          </Typography>
          <Typography gutterBottom variant="body1">
            Phone:{" "}
            <Typography variant="body1" color="textSecondary" component="span">
              {ppl.phone}
            </Typography>
            <Typography gutterBottom variant="body1">
              Balance:{" "}
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                {ppl.balance}
              </Typography>
            </Typography>
            <Typography gutterBottom variant="body1">
              Friends:{" "}
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                {ppl.friends.map((frnd) => frnd.name).join(", ")}
              </Typography>
            </Typography>
            <Typography gutterBottom variant="body1">
              Activity:{" "}
              <Typography
                variant="body1"
                color="textSecondary"
                component="span"
              >
                {ppl.isActive ? "Active" : "Not Active"}
              </Typography>
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
