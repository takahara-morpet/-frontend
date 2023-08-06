import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Subtitles } from '@mui/icons-material';
import PageRoutes from '../../constants/page-routes';

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
  const router = useRouter();

  const clickHome = () => router.push(PageRoutes.EVENTS_URL);
  const clickProfile = () => router.push(PageRoutes.ACCOUNTS_URL);

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
           <Box sx={styles.imageContainer} onClick={clickHome} >
            <Image src="/penguin.svg" alt="Menu" width={80} height={80} />
        </Box>
          <Box sx={styles.textContainer}>
            <Typography noWrap variant="h4" component="div" sx={styles.text}>
              {title}
            </Typography>
            <Typography noWrap variant="h6" component="div" sx={styles.text}>
              {smallTitle ? smallTitle : ""}
            </Typography>
          </Box>
           <Box sx={styles.imageContainer} onClick={clickProfile} >
            <Avatar
              src="/sample/user.png" 
              alt="Login"
              style={styles.avatar} 
            />
             </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
