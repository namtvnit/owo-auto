import { global } from "../index.mjs"
import { main } from "../lib/SelfbotWorker.mjs"
export default {
    info: "Resume the tool",
    callback: (message, ...args) => {
        if(global.captchaDetected) {
            if(global.paused) {
                global.captchaDetected = false
                global.paused = false
                message.reply("The tool is resumed!")
                main();
            }
            else return message.reply("**ACTION REQUIRED!** You must solve the captcha image before resuming the tool")
        } else return message.reply("The tool is not paused!")
    }
}