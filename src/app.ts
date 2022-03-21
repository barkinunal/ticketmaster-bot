import express from "express";
import * as ticketmaster from "./ticketmaster";
import { Telegraf } from "telegraf";
import * as logger from "./utils/logUtils";
const { env } = process;
export const app = express();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.launch();

setInterval(() => {
  ticketmaster.getAppEventDetails(bot);
}, 30 * 1000);

app.get("/", (req, res) => {
  logger.info('"/" is requested.');
  res.send("Hello World!");
});

app.listen(env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${env.PORT}`);
});
