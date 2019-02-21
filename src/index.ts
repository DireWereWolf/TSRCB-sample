import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./UserController";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    cors: true,
    routePrefix: "/api",
    controllers: [UserController] // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000);