import express, { json } from 'express';
import dbConnect from "../database/config.js";
import permissionRoute from "../routes/permissionRoute.js";
import privilegeRoute from "../routes/privilegeRoute.js";
import roleRoute from "../routes/roleRoute.js";
import userRoute from "../routes/userRoute.js";


class Server {
    constructor() {
        this.app = express();
        this.pathUser = '/diverty/user';
        this.pathPermission = '/diverty/permissions';
        this.pathPrivilege = '/diverty/privileges';
        this.pathRole = '/diverty/role';

        this.route();
        this.dbConnection();
        this.listen();
    }
    async dbConnection() {
        await dbConnect();
    }

    route() {
        this.app.use(json())
        this.app.use(this.pathUser, userRoute)
        this.app.use(this.pathRole, roleRoute)
        this.app.use(this.pathPermission, permissionRoute)
        this.app.use(this.pathPrivilege, privilegeRoute)
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }

}

export default Server