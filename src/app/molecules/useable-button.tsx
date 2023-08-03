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
    color?: string;
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
    color = "black",
    // onClick = () => { console.log('clicked') },
    isHoverEnabled = true, // add this line
    
}): JSX.Element => {
    
    return (
        <Button
            variant="contained"
            // onClick={onClick}
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: "40px",
                textTransform: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: color,
                backgroundColor: backgroundColor, // set background color here
                justifyContent: "flex-start",
                textAlign: "center",
                "&:hover": {
                    backgroundColor: backgroundColor,
                    opacity: isHoverEnabled ? 0.8 : 1, // control the opacity on hover
                },
            }}
        >
            <Box sx={{ width: width, height: height, mr: 1 }}>
            <Image src={src} alt={alt}  width={width} height={height} />
            </Box>
            <Box sx={{ flexGrow: 1 }} >
            {text}
            </Box>
        </Button>
    );
};

export default UseableButton;
