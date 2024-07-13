import axios from "axios";

const app_ID = import.meta.env.VITE_APP_ID;
const org_ID = import.meta.env.VITE_ORG_ID;
const api_KEY = import.meta.env.VITE_API_KEY;
export default async function getProducts() {
  try {
    const res = await axios.get(
      `/api/products?organization_id=${org_ID}&reverse_sort=false&Appid=${app_ID}&Apikey=${api_KEY} `,
      { withCredentials: true, credentials: "included" }
    );
    return res.data.items;
  } catch (error) {
    console.error(error);
  }
}
