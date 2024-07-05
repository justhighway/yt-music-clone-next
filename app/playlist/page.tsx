import React from "react";

export default function PlaylistPage(props: {
  searchParams: { list: string };
}) {
  console.log("props: ", props);
  return <div>PlaylistPage {props.searchParams.list}</div>;
}
