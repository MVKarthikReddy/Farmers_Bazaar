import { notify } from "../helper/notification";
import { notifyType } from "../helper/notificationType";

export const postAPI = async (endpointURL, data) => {
  try {
    // console.log(JSON.stringify(data))
    
    const response = await fetch(`http://localhost:5000${endpointURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("hello")
    const responseData = await response.json();
    console.log(response.status);
    notify(responseData["message"], notifyType(response.status));
    return responseData;
  } catch (error) {
    notify(error, "error");
    // return false;
  }
};

