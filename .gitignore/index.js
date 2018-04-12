const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("rien")

bot.on('ready', function() {
    bot.user.setUsername("LemresBot")
    bot.user.setPresence({ game: { name: 'rien car je ne suis que un programme'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {

    if (message.content === "bonjour"){
    message.reply(" je te dit bonjour !");
    }
    if (message.content === "aurevoir"){
        message.reply(" aurevoir et a bientôt !");
    }
    if (message.content === "aide-moi @LemresBot"){
        message.reply("... mais... index.js ne répond pas car il n'a pas envie de te répondre :grinning:");
    }
    if (message.content === "fuck"){
    message.reply("vas y fait toi plaisir mais si te fais bannir ça sera pas de ma faute !");
    }
    if (message.content === "ça vas @LemresBot"){
    message.reply("Ehh... recherche en cours... la réponce n'est pas trouvable dans index.js Ehh... je su/s d0solé §§§ /l me m@nque de§ do§§iers et je ne suis que un pr0gr@mme §");
    }
    if (message.content === "Lemres!help"){
    message.reply("mais tu crois que simplement le demander vas t'ouvrir la porte a toutes mes commandes... tu rève !");
    }
    if (message.content === "lemres!index.js"){
    message.reply("const Discord = require('discord.js')... mais tu crois que je suis un programme de pacotille ? DO NOT ACCES ! juste mon maître peut y avoir accés :grin:");
    }

    if (message.content === "hentai"){
    message.reply("parle pas de la religion comme ça... désolé... mais dans tout les cas la religion est interdi... Index.js a un petit soucis car il a voulu ce connecter a internet mais l'as fait crash XD");
    }})
