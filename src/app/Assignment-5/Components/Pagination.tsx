import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationCompInterface{
  pageCount:number
  page:number
  handleChange:(value:number)=>void
}

export default function PaginationComp({pageCount,page,handleChange}:PaginationCompInterface) {
  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} onChange={(_,value)=>handleChange(value)} />
    </Stack>
  );
}
