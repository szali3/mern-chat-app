import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";

const Post = () => {
  return (
    <Card sx={{ margin: 3}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://www.sainsburysmagazine.co.uk/uploads/media/2400x1800/06/10696-Smoky_Prawn_Paella_2.jpg?v=1-0"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorderOutlinedIcon />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
