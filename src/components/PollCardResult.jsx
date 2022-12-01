import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import { DeleteForever } from "@mui/icons-material";
import { fetchRemovePoll } from "../redux/slices/polls";
export default function MediaCard(props) {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(fetchRemovePoll(props.id));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.descriptionText}
        </Typography>
      </CardContent>

      <CardActions className="justify-between	">
        <NavLink to={`/results/${props.id}`}>
          <Button variant="outlined" size="small">Open results</Button>
        </NavLink>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick = {onClickRemove}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
