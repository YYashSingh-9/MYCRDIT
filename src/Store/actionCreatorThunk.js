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
    console.log(document_2);
    return document_2;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// 3. Login/signup fetch request.

export const login_signup_fetchRequest = async ({ request }) => {
  const data = await request.formData();
  const data_2 = Object.fromEntries(data);
  const data_length = Object.keys(data_2).length;
  console.log(data_2);
  const intent = data.get("intent");

  let request_of;
  let additional_url_part;
  let sendingDataObject = {};

  if (data_length === 2) {
    request_of = "proprietor";
    additional_url_part = "/proprietor-verification";
    sendingDataObject = { ...data_2 };
  }
  if (data_length < 2) {
    request_of = "customer";
    additional_url_part = "/verification-user";
    sendingDataObject = { ...data_2 };
  }
  if (data_length > 2 && data_length <= 15) {
    request_of = "proprietor";
    additional_url_part = "/proprietor-authentication";
    sendingDataObject = {
      ProprietorName: data_2.ProprietorName,
      shopName: data_2.shopName,
      shopAddress: data_2.shopAddress,
      state: data_2.state,
      pincode: data_2.pincode,
      city: data_2.city,
      shopCategory: data_2.shopCategory,
      otherShopCategory: data_2.otherShopCategory,
      contactNumber: data_2.contactNumber,
      password: data_2.password,
      confirmPassword: data_2.confirmPassword,
      mostSellingProduct: data_2.mostSellingProduct,
      leastSellingProduct: data_2.leastSellingProduct,
      proprietorDemand: data_2.proprietorDemand,
      proprietorGST: data_2.proprietorGST,
    };
    console.log(sendingDataObject);
  }

  console.log(request_of, additional_url_part, sendingDataObject);
  data_Send_request(
    request_of,
    additional_url_part,
    "POST",
    sendingDataObject,
    ""
  );
  return data;
};

/*
 React Router's <Form> component, 
when used within a <Route> with an action,automatically provides form data through 
the request object in the action function.

You can access the form data using await request.formData().

Ensure your form inputs have name attributes. 
*/
