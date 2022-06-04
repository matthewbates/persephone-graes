import * as React from "react";
import { LoaderContainer } from "./LoaderElements";
import ReactLoading from "react-loading";

export default function Loader() {
  return (
    <LoaderContainer>
      <ReactLoading
        type="spokes"
        color="black"
        style={{ height: "50px", width: "50px" }}
      />
    </LoaderContainer>
  );
}
