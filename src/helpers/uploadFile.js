// const url = `https://api.cloudinary.com/v1_1/ddhn2niwg/image/upload`;
const url = `https://res.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET_NAME);

  const response = await fetch(url, {
    method: "post",
    body: formData,
  });
  const responseData = await response.json();
  console.log(responseData);

  return responseData;
};

export default uploadFile;
