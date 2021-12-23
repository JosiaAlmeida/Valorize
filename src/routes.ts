import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const AuthController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()


router.post('/user', createUserController.handle)
router.post('/login', AuthController.handle)

router.post('/tags',ensureAdmin ,createTagController.handle)

router.post('/compliments', createComplimentController.handle)

export {router}