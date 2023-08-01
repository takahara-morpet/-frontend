'use client';
import React from "react";
import { Button} from "@mui/material";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    size?: number;
    onClick?: () => void;
}

export const ImageButton: React.FC<Props> = ({
    src,
    alt,
    size = 50,
    onClick = () => { console.log('clicked') }
}) => {
    return (
        <Button
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            onClick={onClick}
            color="inherit"
        >
            <Image
                src={src}
                alt={alt}
                className="dark:invert"
                width={size}
                height={size}
                priority
            />
        </Button>
    );
}

export default ImageButton;