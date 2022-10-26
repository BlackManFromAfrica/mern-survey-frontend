import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./showPollCard.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NavLink } from "react-router-dom";
import { UserInfo } from "../UserInfo/Index";
export const PollCard = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
  descriptionText,
}) => {
  if (isLoading) {
    return <></>;
  }
  return (
    <Card
      sx={{
        minWidth: 300,
        borderRadius: 10,
        boxShadow: "1px 1px 10px #fbc2eb",
        margin: 10,
      }}
      className="cardShow"
    >
      <NavLink to={`/polls/${id}`}>
        <UserInfo {...user} descriptionText />
        <span
          style={{
            fontSize: 15,
            margin: '5%',
          }}
        >
          {descriptionText}
        </span>

        <CardContent
        >
          <div
            className="imagePoll"
            style={{
              width: '100%',
              height: 200,
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundSize: 'cover',
            }}
          >
          </div>
          <Typography variant="body2" color="text.secondary">
            <div
              className="viewCount"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {viewsCount}
              </span>
              <VisibilityIcon />
            </div>
          </Typography>
        </CardContent>
      </NavLink>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <Typography color="text.secondary" fontSize={16}>
          {createdAt}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default PollCard;
