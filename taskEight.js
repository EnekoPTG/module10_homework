let users = new Map();
users.set("Яблоко", "красное");
users.set("Дом", "кирпичный");
users.set("Работа", "прибыльная");
users.set("Лучшие курсы", "SkillFactory");
for (let user of users.keys()){
    console.log(user + " - " + users.get(user));
}