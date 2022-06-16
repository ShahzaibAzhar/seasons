import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  header: {
    Authorization: "Client-ID ijIW-aCi7ibf1ofbibyj03mXuQj_fIayCwNC-u-kpmQ",
    //AcceptVersion: v1,
  },
});
