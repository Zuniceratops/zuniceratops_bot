// https://api.telegram.org/bot1087301654:AAFZKpAZJul6BK-sl7-GU_NItuYkkDxFmTE/sendMessage?chat_id=-427190390&text=hi_i_am_a_bot;
// https://api.telegram.org/bot1087301654:AAFZKpAZJul6BK-sl7-GU_NItuYkkDxFmTE/getUpdates;

document.querySelector('button').onclick = function() {
    let message = document.querySelector('.message').value;
    const token = '1087301654:AAFZKpAZJul6BK-sl7-GU_NItuYkkDxFmTE'
    const url = 'https://api.telegram.org/bot'+ token +'/sendMessage?chat_id=-427190390&text=';
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + message, true);
    xhttp.send();

}