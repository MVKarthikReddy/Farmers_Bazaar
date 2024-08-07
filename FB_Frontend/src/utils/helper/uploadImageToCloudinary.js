import { notify } from "./notification";

export const uploadImageToCloudinary = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "images_preset");
  data.append("cloudname",`${import.meta.env.VITE_CLOUDINARY_NAME}`)

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`, {
      method: "post",
      body: data,
    });
    
    if (!response.ok) {
      notify("Error occurred while uploading the image", "error");
      console.log("Error:", response);
      return "error";
    }
    
    const responseData = await response.json();
    // console.log(responseData);
    return responseData.secure_url;
  } catch (err) {
    console.log(err);
    notify("Error occurred while uploading the image", "error");
    return "error";
  }
};
