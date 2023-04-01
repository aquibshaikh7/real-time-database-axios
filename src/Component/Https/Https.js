import axios from "axios";

const match_url =
  "https://react-project-http-438c4-default-rtdb.firebaseio.com/";

export const GetData = async () => {
  try {
    const resolve = await axios.get(match_url + "/movies.json");
    console.log("resolve", resolve);
    return resolve;
  } catch (error) {}
};

export const PostData = async (postData) => {
  const resolve = await axios.post(match_url + "/movies.json", postData);
  console.log("postData", postData);
};

export const DeleteData = async (uuid) => {
  try {
    const deleteValue = await axios.delete(match_url + `/movies/${uuid}.json`);
    console.log("uuid", uuid);
  } catch (error) {}
};
