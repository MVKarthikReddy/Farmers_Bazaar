import { notify } from "../helper/notification";
import { notifyType } from "../helper/notificationType";

export const postAPI = async (endpointURL, data) => {
  try {
    console.log(endpointURL)
    const response = await fetch(`https://farmers-bazaar.onrender.com${endpointURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    // console.log(responseData);
    notify(responseData["message"], notifyType(response.status));
    return responseData;
  } catch (error) {
    notify(error, "error");
    // return false;
  }
};

