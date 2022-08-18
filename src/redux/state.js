
// создали объект state в котором
// содержатся массивы объектов
let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Привет, как тебя зовут?', likesCount: 20, adress: 'https://www.1zoom.ru/big2/946/289597-frederika.jpg',},
      {id: 2, message: 'Меня зовут Юрчик!!!', likesCount: 100, adress: 'https://www.film.ru/sites/default/files/styles/thumb_600x400/public/articles/0908/avt.jpg'},
    ],
  }, // каждая ветка обслуживает отдельную страницу
  dialogsPage: {
    dialogs: [
      {id: 1, name: "Юрчик"},
      {id: 2, name: "Анна"},
      {id: 3, name: "Ксюнчик"},
      {id: 4, name: "Валера"},
      {id: 5, name: "Людмила"},
      {id: 6, name: "Лидия"},
      {id: 7, name: "Николай"},
    ],
    messages: [
      {id: 1, message: "Кукушечки"},
      {id: 2, message: "Старушатиной пахнет"},
      {id: 3, message: "Кэрлэбэле"},
      {id: 4, message: "Футбол, включите футбол"},
      {id: 5, message: "Работу, дайте работу!"},
      {id: 6, message: "Что-то я переживаю"},
      {id: 7, message: "Босоногое детство"},
    ],
  }, // каждая ветка обслуживает отдельную страницу
}

export default state;