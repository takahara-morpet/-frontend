import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Subtitles } from '@mui/icons-material';


interface HeaderProps {
  title: string;
  smallTitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  smallTitle,
}): JSX.Element => {

  const styles = {
    container: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#62A2DE",
    },
    toolbar: {
      paddingTop: '10px',
    },
    imageContainer: {
      mr: 1,
    },
    textContainer: {
      display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            textAlign: "center",
            position: "relative",
            right: "20px",
    },
    text: {
      flexGrow: 1,
      textAlign: "center",
    },
    avatar: {
      width: 50,
      height: 50,
}
}

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Link href="/">
            <Box sx={styles.imageContainer}>
              <Image src="/penguin.svg" alt="Menu" width={80} height={80} />
            </Box>
          </Link>
          <Box sx={styles.textContainer}>
            <Typography noWrap variant="h4" component="div" sx={styles.text}>
              {title}
            </Typography>
            <Typography noWrap variant="h6" component="div" sx={styles.text}>
              {smallTitle ? smallTitle : ""}
            </Typography>
          </Box>
            <Avatar
              src="/sample/user.png" 
              alt="Login"
              style={styles.avatar} 
            />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
