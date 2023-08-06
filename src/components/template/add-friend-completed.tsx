import React from "react";
import Image from "next/image";

import { Avatar, Box, Button, Typography } from "@mui/material";
import User from "@/types/user";

interface AddFriendCompletedLayoutProps {
  user: User;
}

const AddFriendCompletedLayout: React.FC<AddFriendCompletedLayoutProps> = ({
  user
}): JSX.Element => {

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "4vh"
    },
    avatar: {
      width: 120,
      height: 120,
      marginBottom: "4vh"
    },
    name: {
      marginBottom: "2vh",
      fontSize: "1.2rem"
    },
    time: {
      textAlign: "center", 
      fontSize: "1.2rem"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      bottom: "10vh",
      width: "100%"
    }

  };

  return (
    <>
      <Box sx={styles.container}>
        { user?.icon_url && <Avatar alt="penguin" src={user.icon_url} sx={styles.avatar} />}
        <Typography variant="h4" sx={styles.name}>
        {user?.username} さんと友達になりました。
        </Typography>
        <Typography variant="h6" sx={styles.time}>
        つながった日時： {/* HACK: データどうする */}
        </Typography>
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button>
          <Image src="checkcircle.svg" alt='check button' width={50} height={50}/>
        </Button>
      </Box>
    </>
  );
}

export default AddFriendCompletedLayout;
