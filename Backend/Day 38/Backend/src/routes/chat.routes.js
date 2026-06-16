import { Router } from "express";
import {
  sendMessageController,
  getChatsController,
  getMessagesController,
  deleteChatController,
} from "../controllers/chat.controller.js";
import { authUserMiddleware } from "../middleware/auth.middleware.js";

const chatRouter = Router();

chatRouter.post("/message", authUserMiddleware, sendMessageController);
chatRouter.get("/", authUserMiddleware, getChatsController);
chatRouter.get("/:chatId/messages", authUserMiddleware, getMessagesController);
chatRouter.delete("/delete/:chatId", authUserMiddleware, deleteChatController);

export default chatRouter;
