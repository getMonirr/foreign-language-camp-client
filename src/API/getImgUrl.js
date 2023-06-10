import axios from "axios";

export const getImgUrl = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_api_key}`,
    formData
  );
  const url = data?.data?.display_url;

  return url;
};
