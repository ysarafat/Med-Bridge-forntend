import axios from "axios";
const uploadImage = async (formData: FormData) => {
  const response = await axios.post(
    "https://api.imgbb.com/1/upload?key=747b5489d3068f8da1322af5e3b3f80a",
    formData
  );
  return response.data.data.display_url as string;
};

export default uploadImage;
