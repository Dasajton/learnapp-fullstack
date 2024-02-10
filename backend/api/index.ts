import * as config from "./config";
import { app } from "./server";

app.listen(config.getPort(), () => {
  console.log(
    `LearnApp API is running at http://localhost:${config.getPort()}`
  );
});
