import styled from "@emotion/styled";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icon = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar
        sx={{
          display: "block",
        }}
      >
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Z Social
        </Typography>
        <ForumSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icon>Icons</Icon>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
