import express from "express";
import * as ticketmaster from "./ticketmaster";
import { Telegraf } from "telegraf";
import * as logger from "./utils/logUtils";

export const app = express();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.launch();

setInterval(() => {
  ticketmaster.getAppEventDetails(bot);
}, 30 * 1000);
