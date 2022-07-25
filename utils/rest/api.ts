import axios from "axios";

export const fetchData = async (method: string, query?: string) => {
  const queryUrl = `${process.env.NEXT_PUBLIC_API_URL}/${method}${
    query ? `/:${query}` : ""
  }`;
  const fetchedData = await axios.get(queryUrl);
  return fetchedData;
};

export const postData = async (
  method: string,
  data: object,
  query?: string
) => {
  const body = JSON.stringify(data);
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const postMethod = `${process.env.NEXT_PUBLIC_API_URL}/${method}${
    query ? `/:${query}` : ""
  }`;
  const result = await axios.post(postMethod, body, axiosConfig);
};

// export const postFile = (method: string, data: any) => {
//   return new Promise((resolve, reject) => {
//     const fd = new FormData();

//     data.files.forEach((item: any) => fd.append("files", item.file));
//     fd.append("bucketUrl", data.bucketUrl);
//     const postMethod = `${process.env.NEXT_PUBLIC_API_URL}/${method}`;
//     axios
//       .post(postMethod, fd)
//       .then((response) => {
//         if (!isError(response.data.status)) {
//           resolve(response.data);
//         } else {
//           reject(response.data);
//         }
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// export const removeFile = (
//   method: string,
//   data: any,
//   type: string,
//   returnFunction: (success: boolean, returnData?: any[]) => void
// ) => {
//   let item = {
//     dataType: data["image_data"]["dataType"],
//     url: data["image_data"]["url"],
//   };
//   let body = JSON.stringify(item);

//   let axiosConfig = {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };

//   var postMethod = process.env.NEXT_PUBLIC_API_URL + "/" + method + ":" + type;
//   try {
//     axios.post(postMethod, body, axiosConfig).then((response) => {
//       if (response.status === 200) {
//         returnFunction(true, response.data);
//       } else {
//         returnFunction(false, [response.status]);
//       }
//     });
//   } catch {
//     returnFunction(false, ["unknownIssue"]);
//   }
// };
