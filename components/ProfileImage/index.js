import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
export const ProfileImage = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
		<IconButton sx={{ p: 0 }}>
		<Avatar alt={user.name} src={user.picture} />
	  </IconButton>
    )
  );
};