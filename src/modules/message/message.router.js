
import { Router } from 'express';
import { isauthenticated } from '../../middleware/auth.middleware.js';
import { validation } from '../../middleware/validation.middelware.js';
import { sendmessageschema } from './message.schema.js';
import * as messageController from "./message.controller.js"

const router = Router();

router.post("/",isauthenticated,validation(sendmessageschema),messageController.sendmessage)

//router.get('/',messageController.usermessages);

export default router;

