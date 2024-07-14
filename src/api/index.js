import {baseRequest} from "@/api/instance.js";
import users from "@/api/services/users/index.js";

export const FETCH = {
    users: users(baseRequest)
}
