
export interface RequestResponse<T> {
  data: T,
  status: number
}

export async function get<T>(url: string): Promise<RequestResponse<T>> {
  const response = await fetch(url);
  return (await response.json()) as RequestResponse<T>;
}

export async function put<T, U>(url: string, body?: U) {
  const requestOptions: any = {
    url: url,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, requestOptions);
  return (await response.json()) as RequestResponse<T>;
}