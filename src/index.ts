import app from "./app";
import env from "dotenv";
env.config();



const PORT: number = parseInt(process.env.PORT || "3000");
app.listen(PORT, () => {
  console.log("server started");
});
