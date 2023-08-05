import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";

export interface UseableButtonProps {
    src: string;
    alt: string;
    text: string;
    width?: number;
    height?: number;
    textColor?: string;
    backgroundColor?: string;
    // TODO 高原:後で実装しておきます
    // onClick?: () => void;
    isHoverEnabled?: boolean; // add this line
}

const UseableButton: React.FC<UseableButtonProps> = ({
    src,
    alt,
    text,
    width = 50,
    height = 50,
    backgroundColor = "inherit",
    textColor = "black",
    // onClick = () => { console.log('clicked') },
    isHoverEnabled = true, // add this line

}): JSX.Element => {

    const styles = {
        container: {
            backgroundColor: backgroundColor,
            borderRadius: "40px",
        },
        button: {
            width: "100%",
            height: "100%",
            borderRadius: "40px",
            textTransform: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: textColor,
            backgroundColor: "inherit", // set background color here
            justifyContent: "flex-start",
            textAlign: "center",
            "&:hover": {
                backgroundColor: backgroundColor,
                opacity: isHoverEnabled ? 0.8 : 1, // control the opacity on hover
            },
        },
        imageContainer: {
            width: width,
            height: height + 3,
            mr: 1
        },
        textContainer: {
            flexGrow: 1,
        },
    };

    return (
        <Box sx={styles.container}>
            <Button
                variant="contained"
                // onClick={onClick}
                sx={styles.button}
            >
                <Box sx={styles.imageContainer}>
                    <Image src={src} alt={alt} width={width} height={height} />
                </Box>
                <Box sx={styles.textContainer} >
                    {text}
                </Box>
            </Button>
        </Box>
    );
};

export default UseableButton;
