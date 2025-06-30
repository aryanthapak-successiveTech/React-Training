import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComp({pageCount,page,handleChange}) {
  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Stack>
  );
}
