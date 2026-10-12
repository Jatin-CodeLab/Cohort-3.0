import app from "./src/app/app.js";
import {connectDB} from "./src/config/DB.js";

await connectDB();

app.listen(3000, () => {
    console.log('port lag gaya hai');
})