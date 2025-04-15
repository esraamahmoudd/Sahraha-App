import {Router} from "express";
import * as authcontroller from "./authcontroller.js";
import { validation } from "../../middleware/validation.middelware.js";
import { signupschema} from "./authschema.js";
import { loginschema } from "./authschema.js";

const router = Router();


router.post("/login",validation(loginschema),authcontroller.login);

router.post("/signup",validation(signupschema),authcontroller.signup);


export default router;