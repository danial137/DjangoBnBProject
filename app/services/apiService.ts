const apiService = {
  post: async function (url: string, data: any): Promise<any> {
    console.log("POST DATA =>", JSON.stringify(data));

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
      method: "POST",

      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),

      body: JSON.stringify(data),
    });

    const json = await response.json();

    console.log("STATUS =>", response.status);
    console.log("RESPONSE =>", json);

    return json;
  },

  get: async function (url: string): Promise<any> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.json();
  },
};

export default apiService;
