import React from "react";
import useFetch from "./useFetch";

export default function GitFollowers({ username }) {

  const { data, loading, error } = useFetch(`https://api.github.com/users/${username}/followers`);
  console.log(data, loading, error);
  return <div></div>;
}
