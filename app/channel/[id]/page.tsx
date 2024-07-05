import React from "react";

export default function ChannelPage(props) {
  console.log(props);
  return <div>ChannelPage {props.params.id}</div>;
}
