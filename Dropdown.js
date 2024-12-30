import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Dropdown = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Month</InputLabel>
      <Select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <MenuItem key={month} value={month}>
            {month}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
