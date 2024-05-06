const currentDate = new Date();

global.date = currentDate;

module.exports.printMessage = function (){
    const hour = currentDate.getHours();
    if (hour > 16)
        console.log("Добрый вечер,", global.username);
    else if (hour > 10)
        console.log("Добрый день,", global.username);
    else
        console.log("Доброе утро,", global.username);
};


