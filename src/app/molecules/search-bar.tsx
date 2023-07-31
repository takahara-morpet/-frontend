import React from "react";
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
  return (
    <div className="relative rounded-md bg-opacity-15 bg-gray-500 hover:bg-opacity-25 ml-0 w-full sm:ml-1 sm:w-auto border ">
      <div className="p-2 h-full w-full absolute pointer-events-none flex items-center ">
        <SearchIcon sx={{
             color: color,
        }}/>
      </div>
      <InputBase
        fullWidth
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        className="pl-8 w-full  focus:w-20 transition-width text-black"
      />
    </div>
  );
};

export default SearchBar;