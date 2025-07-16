import type { headersType } from "../context/headersStore";
const headersHeandler = (headers: headersType) => {
  return {
    "Content-type": "application/json; charset=UTF-8",
    ...(headers || {}),
  };
};
const getRequest = async (url: string, headers: headersType) => {
  const response = await fetch(url, {
    method: "GET",
    headers: headersHeandler(headers),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return JSON.stringify(data, null, 2);
};
const postRequest = async (url: string, body: any, headers: headersType) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headersHeandler(headers),
    body: body,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return JSON.stringify(data, null, 2);
};
const putRequest = async (url: string, body: any, headers: headersType) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: headersHeandler(headers),
    body: body,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return JSON.stringify(data, null, 2);
};
const patchRequest = async (url: string, body: any, headers: headersType) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: headersHeandler(headers),
    body: body,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return JSON.stringify(data, null, 2);
};
const deleteRequest = async (url: string, headers: headersType) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: headersHeandler(headers),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return `Resource at ${url} deleted successfully.`;
};

export const requestHandler = async (
  url: string,
  method: string,
  headers: headersType,
  body?: string,
) => {
  switch (method) {
    case "GET":
      return await getRequest(url, headers);
    case "POST":
      return await postRequest(url, body, headers);
    case "PUT":
      return await putRequest(url, body, headers);
    case "PATCH":
      return await patchRequest(url, body, headers);
    case "DELETE":
      return await deleteRequest(url, headers);
    default:
      throw new Error(`Unsupported method: ${method}`);
      return `Error: Unsupported method ${method}`; // Fallback return in case of unsupported method
  }
};
