import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";

export interface UseableButtonProps {
    src: string;
    alt: string;
    text: string;
    size?: number;
    color?: string;
    backgroundColor?:string;
    // onClick?: () => void;
   
}

const UseableButton: React.FC<UseableButtonProps> = ({
    src,
    alt,
    text,
    size = 50,
    backgroundColor="inherit",
    color="black",
    // onClick=() => {console.log('clicked')},
    
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
                backgroundColor: backgroundColor,
                justifyContent: "flex-start",
                textAlign: "center",
                "&:hover": {
                    backgroundColor: backgroundColor,
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

export default UseableButton;