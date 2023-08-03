import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import UseableButton from "../molecules/useable-button";

const Login: React.FC = (): JSX.Element => {
  return (
    <Container maxWidth="xs" sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '70vh',
    }}>
      <Typography component='h1' variant='h4'>
        新規登録
      </Typography>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "70vh" }}
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
            color="#000000"
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
            color="#ffffff"
            backgroundColor="#000000"
            isHoverEnabled={false}
          // onClick={()=>{}}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: 'center', margin: 20 }}>
        アカウントをお持ちでないですか？
        <span style={{ color: 'rgb(0, 112, 210)' }}>
          新規登録
        </span>
      </div>
    </Container>
  );
};

export default Login;
