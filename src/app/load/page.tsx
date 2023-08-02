import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import exp from "constants";

const Load: React.FC = (): JSX.Element => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh", backgroundColor: "#62a2de" }}>
        <Image className="" src="/penguin.png" alt="penguin" width={250} height={250} />
        <p>Loading...</p>
        </Box>
    );
}

export default Load;