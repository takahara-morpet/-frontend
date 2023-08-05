import React from "react";

import { Grid, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import UseableButton from "@/components/molecules/useable-button";


const Login: React.FC = (): JSX.Element => {

  const styles = {
    container: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '70vh',
    },
    gridContainer: {
      minHeight: '70vh',
    },
    textContainer: {
      textAlign: 'center',
      margin: 20
    },
    textSpan: {
      color: 'rgb(0, 112, 210)'
    },
  }

  return (
    <Container maxWidth="xs" sx={styles.container}>
      <Typography component='h1' variant='h4'>
        新規登録
      </Typography>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={styles.gridContainer}
      >
        <Grid item>
          <img src="/penguin.svg" alt="penguin" />
        </Grid>

        <Grid item>
          <UseableButton
            src="/Line.svg"
            alt="placeholder"
            text="Lineでログイン"
            width={50}
            height={50}
            textColor="#000000"
            backgroundColor="#00B900"
            isHoverEnabled={true}
          // onClick={()=>{}}
          />
        </Grid>

        <Grid item>
          <UseableButton
            src="/mail.svg"
            alt="placeholder"
            text="メールでログイン"
            width={50}
            height={50}
            textColor="#ffffff"
            backgroundColor="#000000"
            isHoverEnabled={false}
          // onClick={()=>{}}
          />
        </Grid>
      </Grid>
      <Box sx={styles.textContainer}>
        アカウントをお持ちでないですか？
        <span style={styles.textSpan}>
          新規登録
        </span>
      </Box>
    </Container>
  );
};

export default Login;
