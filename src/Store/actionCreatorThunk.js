import { QueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const client = new QueryClient();

// PROPRIETOR ACTION FUNCTIONS

// 1. Fetch request function (GET).

export const data_fetch_function = async (urlType, cookie, additional) => {
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
  const intent = data.get("intent");

  let request_of;
  let additional_url_part;
  let sendingDataObject = {};

  if (data_length === 3) {
    //Proprietor login
    request_of = "proprietor";
    additional_url_part = "/proprietor-verification";
    sendingDataObject = { ...data_2 };
    console.log("this ran");
  }
  if (data_length < 2) {
    // Customer Authentication (login/signup);
    request_of = "customer";
    additional_url_part = "/verification-user";
    sendingDataObject = { ...data_2 };
  }
  if (data_length > 3 && data_length <= 15) {
    // Proprietor Signup
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
  }

  const returnedData = data_Send_request(
    request_of,
    additional_url_part,
    "POST",
    sendingDataObject,
    ""
  );
  return returnedData;
};

// 4. get all home page loader data (proprietor);

export const getHomePage_Data_Proprietor = async (cookie, accType) => {
  let returnData;
  accType = "proprietor";
  console.log(cookie);
  if (accType === "proprietor") {
    returnData = data_fetch_function("proprietor", cookie, "/get-all-notes");
  } else return (returnData = "Data fetching not required");
  return returnData;
};

// 5. get all notes of same customer (proprietor)

export const getAllCustomerNotes = async (customerNum, cookie) => {
  const obj = {
    customerNumber: customerNum,
  };
  const data = data_Send_request(
    "proprietor",
    "get-all-specific-customer-notes",
    "POST",
    obj,
    cookie
  );

  return data;
};

// 6. Patch  request handler for accepting/paying/deleting notes

export const patch_RequestHandler = async (
  accType,
  data,
  cookie,
  requestOf
) => {
  let objectToSend, request_of, additionalUrlPart, paymentDate;
  paymentDate = new Date();

  if (accType === "proprietor" && requestOf === "delete") {
    objectToSend = {
      noteId: data.id,
    };
    request_of = "proprietor";
    additionalUrlPart = "delete-note";
  } else if (accType === "proprietor" && requestOf === "paying") {
    request_of = "proprietor";
    additionalUrlPart = "note-payment";
    objectToSend = {
      debtNote_Id: data.id,
      customerNumber: data.customerNumber,
      paymentDate: paymentDate,
    };
    console.log(objectToSend);
  } else if (accType === "customer" && requestOf === "accepting") {
    request_of = "customer";
    additionalUrlPart = "note-approval-request";
  }

  const returned_Data = await data_Send_request(
    request_of,
    additionalUrlPart,
    "PATCH",
    objectToSend,
    cookie
  );
  return returned_Data;
};

// 7. Create DebtNote request

export const createNote_Handler = async ({ request }) => {
  const data = await request.formData();
  const data_2 = Object.fromEntries(data);
  const p_data = data.get("proprietor-data");
  let cookie, proprietorId, objectToSend;

  cookie = p_data.split(",")[0];
  proprietorId = p_data.split(",")[1];

  objectToSend = {
    proprietorId: proprietorId,
    noteTitle: data_2.noteTitle,
    customerName: data_2.customerName,
    customerNumber: data_2.customerNumber,
    date: data_2.date,
    productBrand: data_2.productBrand,
    productName: data_2.productName,
    amount: data_2.amount,
  };

  await data_Send_request(
    "proprietor",
    "create-note",
    "POST",
    objectToSend,
    cookie
  );
  return data_2;
};

// 8. Get all cleared notes (proprietor & customer)

export const getClearedNotes = async (cookie, acc_type) => {
  console.log(cookie, acc_type);
};
/*
 React Router's <Form> component, 
when used within a <Route> with an action,automatically provides form data through 
the request object in the action function.

You can access the form data using await request.formData().

Ensure your form inputs have name attributes. 
*/
