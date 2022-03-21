import { app } from "./app";
import "dotenv/config";
import * as logger from "./utils/logUtils";
import * as request from "./utils/requestUtils";
import { Telegraf } from "telegraf";
const { env } = process;

export async function getAppEventDetails(bot: Telegraf) {
  logger.verbose(`getAppEventDetails is called`);

  const response = await request.get(env.ED_SHEERAN_URL);

  if (response.status === 200) {
    logger.info("THERE IS A TICKET!!!");
    await bot.telegram.sendMessage(env.BOT_FOUND_CHAT_ID, "THERE IS A TICKET");
  } else {
    logger.info("There are no tickets yet :(");
    await bot.telegram.sendMessage(
      env.BOT_COULDNT_FOUND_CHAT_ID,
      "There are no tickets yet :("
    );
  }
}
