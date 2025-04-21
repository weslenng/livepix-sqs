import "dotenv/config";

import { HandleSocket } from "./socket/handler";

Promise.resolve().then(HandleSocket);
