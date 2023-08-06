'use client'
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/material/styles";

// just for fun
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const RotateImage = styled(Image)({
  animation: `${rotateAnimation} 2s linear infinite`,
  transformOrigin: "bottom center"
});


const Load: React.FC = (): JSX.Element => {

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "#62a2de",
        },
    };

    return (
        <Box sx={styles.container}>
        <RotateImage src="/penguin.png" alt="penguin" width={250} height={250} />
        <p>Loading...</p>
        </Box>
    );
}

export default Load;