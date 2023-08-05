import React from "react";
import { Avatar, Box, Button } from "@mui/material";

interface AddFriendCompletedLayoutProps {
  createdAt: string;
  avatarUrl: string;
  name: string;
}

const AddFriendCompletedLayout: React.FC<AddFriendCompletedLayoutProps> = ({
  createdAt,
  avatarUrl,
  name
}): JSX.Element => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "4vh" }}>
        <Avatar alt="penguin" src={avatarUrl} sx={{ width: 120, height: 120, marginBottom: "4vh" }} /> {/* 余白の調整 */}
        <h3 style={{ marginBottom: "2vh", fontSize: "1.2rem" }}>{name} さんと友達になりました。</h3> {/* 文字の大きさを1.2remに揃える */}
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>つながった日時：{createdAt}</p> {/* 文字の大きさと位置を調整 */}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", bottom: "10vh", width: "100%" }}> {/* 画面下の真ん中に配置し、位置を上に調整 */}
        <Button>
          <img src="checkcircle.svg" />
        </Button>
      </Box>
    </>
  );
}

export default AddFriendCompletedLayout;
