const getRequest = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.stringify(data, null, 2);
};
const postRequest = async (url: string, body: any) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.stringify(data, null, 2);
};
const putRequest = async (url: string, body: any) => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.stringify(data, null, 2);
};
const patchRequest = async (url: string, body: any) => {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.stringify(data, null, 2);
};
const deleteRequest = async (url: string) => {

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return `Resource at ${url} deleted successfully.`;
};

export const requestHandler = async (
  url: string,
  method: string,
  body?: string
) => {
  switch (method) {
    case "GET":
      return await getRequest(url);
    case "POST":
      return await postRequest(url, body);
    case "PUT":
      return await putRequest(url, body);
    case "PATCH":
      return await patchRequest(url, body);
    case "DELETE":
      return await deleteRequest(url);
    default:
      throw new Error(`Unsupported method: ${method}`);
      return `Error: Unsupported method ${method}`; // Fallback return in case of unsupported method
  }
};
