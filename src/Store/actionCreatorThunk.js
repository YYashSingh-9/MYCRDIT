import { QueryClient } from "@tanstack/react-query";

export const client = new QueryClient();

// PROPRIETOR ACTION FUNCTIONS

// 1. Fetch request function (GET).

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
  console.log(document_2);
  return document_2;
};

// 2. Fetch request function (POST,PATCH)

export const data_Send_request = async (
  urlType,
  additional,
  methodtype,
  data_to_send,
  cookie
) => {
  try {
    let url = `http://localhost:3000/mycrdit/api/${urlType}`;

    additional ? (url += `/${additional}`) : "";

    const dataToBeSent = data_to_send
      ? JSON.stringify(data_to_send)
      : new Error("Data Missing could not send request.");

    const document = await fetch(url, {
      credentials: "include",
      withCredentials: true,
      method: methodtype,
      headers: {
        Authorization: `Bearer ${cookie}`,
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        cookie: `jwt=${cookie}`,
      },
      body: dataToBeSent,
      redirect: "follow",
    });

    const document_2 = await document.json();
    return document_2;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// 3. Login/signup fetch request.

export const login_signup_fetchRequest = ({ request }) => {
  const data = request.formData();
  console.log(data);
  console.log(request);
};
