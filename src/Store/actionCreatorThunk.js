import { QueryClient } from "@tanstack/react-query";

export const client = new QueryClient();

// PROPRIETOR ACTION FUNCTIONS

// 1. All running notes.

export const getRequestFunction = async (urlType, cookie, additional) => {
  let url = `http://localhost:3000/mycrdit/api/${urlType}`;

  additional ? (url += `/${additional}`) : "";

  const document = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      cookie: `jwt=${cookie}`,
    },
    redirect: "follow",
  });
  console.log(document);
  const document_2 = await document.json();
  return document_2;
};
