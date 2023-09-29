import "dotenv/config";
import app from "./src/app.js";

app.listen(process.env.HTTP_PORT, () => {
    console.log("Servidor rodando!");
});