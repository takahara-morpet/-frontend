import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Title",
}): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#62A2DE" }}>
        <Toolbar>
          <a href="/">
            <img
              src="/penguin.svg" // 画像のパスを指定してください
              alt="Menu"
              style={{width: 80, height: 80, marginRight: 8 }} // スタイルを調整する場合はここで行ってください
            />
          </a>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            {title}
          </Typography>
         
            <Avatar
              src="/sample/user.png" // 画像のパスを指定してください
              alt="Login"
              style={{width:50,height: 50 }} // スタイルを調整する場合はここで行ってください
            />
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
