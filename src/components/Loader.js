import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <div
        className="loading-screen"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box>
          <CircularProgress />
        </Box>
      </div>
    </div>
  );
}
