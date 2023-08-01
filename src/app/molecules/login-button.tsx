import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";

export interface LoginButtonProps {
    src: string;
    alt: string;
    text: string;
    size?: number;
    color?: string;
    onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({
    src,
    alt,
    text,
    size = 50,
    color="inherit",
    onClick=() => {console.log('clicked')},
}): JSX.Element => {
    
    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: "40px",
                textTransform: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "black",
                backgroundColor: color,
                justifyContent: "flex-start",
                textAlign: "center",
                "&:hover": {
                    backgroundColor: color,
                    opacity: 0.8,
                },
            }}
        >
            <Box sx={{ width: size, height: size, mr: 1 }}>
            <Image src={src} alt={alt}  width={size} height={size}/>
            </Box>
            <Box sx={{ flexGrow: 1 }} >
            {text}
            </Box>
        </Button>
        

    );
};

export default LoginButton;