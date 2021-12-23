import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveController } from "./controllers/ListUserReceiveController";
import { ListUserSenderController } from "./controllers/ListUserSenderController";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const AuthController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiveController = new ListUserReceiveController()
const listUserSendController = new ListUserSenderController()

router.get('/compliments/receive',ensureAuthenticated, listUserReceiveController.handle)
router.get('/compliments/send',ensureAuthenticated, listUserSendController.handle)

router.post('/user', createUserController.handle)
router.post('/login', AuthController.handle)

router.post('/tags',ensureAuthenticated ,ensureAdmin ,createTagController.handle)

router.post('/compliments',ensureAuthenticated , createComplimentController.handle)

export {router}