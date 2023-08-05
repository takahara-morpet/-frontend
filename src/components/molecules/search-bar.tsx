import React from "react";

import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

interface SearchBarProps {
    searchValue?: string;
    color?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    searchValue,
    color = "gray",
}): JSX.Element => {

  const styles = {
    container: {
      width: "80%",
      position: "relative",
      borderRadius: "0.375rem",
      backgroundColor: color,
      borderWidth: "1px",
      "&:hover": {
        backgroundColor: color,
        opacity: 0.8,
      },
    },
    iconContainer: {
        padding: "0.5rem",
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
    },
    searchIcon: {
        color: "black",
        position: "relative",
        bottom: "0.4rem",
        right: "0.1rem",
    },
    input: {
      paddingLeft: "2rem",
      width: "100%",
      transitionProperty: "width",
      color: "black",
    }
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.iconContainer}>
      <SearchIcon sx={styles.searchIcon}/>
      </Box>
      <InputBase
        fullWidth
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={styles.input}
      />
    </Box>
    
  );
};

export default SearchBar;