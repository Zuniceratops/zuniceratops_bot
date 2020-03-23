// https://api.telegram.org/bot1087301654:AAFZKpAZJul6BK-sl7-GU_NItuYkkDxFmTE/sendMessage?chat_id=-427190390&text=hi_i_am_a_bot;
// https://api.telegram.org/bot1087301654:AAFZKpAZJul6BK-sl7-GU_NItuYkkDxFmTE/getUpdates;
const token = '1087301654:AAFZKpAZJul6BK-sl7-GU_NItuYkkDxFmTE'
const url = 'https://api.telegram.org/bot'+ token +'/sendMessage?chat_id=-427190390&text=';


const input = document.querySelector('.message');
const button = document.querySelector('button');

async function pushMessage() {
    let message = input.value;
    await fetch(url + message);

    input.value = '';
}
button.addEventListener('click', pushMessage);





