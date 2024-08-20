import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    console.log("uploading on cloudinary");

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "aurelia", // add the cloudinary folder name here, if the folder doesn't exist cloudinary will create one
    });
    fs.unlinkSync(localFilePath); // remove the file from the public folder once the upload is successfull
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the file from the public folder if  error occurs
  }
};

export { uploadOnCloudinary };
