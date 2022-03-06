const day = {}
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

btn.addEventListener('click', () => {
    const value = document.querySelector('.date').value;
    day.value = value

    result.value = getDayInfo(day.value)

    function getDayInfo(date) {

        const da = date.replace(/\./g, ' ').split(' ')
        const dat = da.map(() => `${da[1]}.${da[0]}.${da[2]}`)[0]

        const d = new Date(dat);
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

        const data = new Date(d);
        const week = Math.ceil((data.getDate() + 6 - data.getDay()) / 7);

        return `${days[d.getDay()]}, ${week} неделя ${months[d.getMonth()]} ${d.getFullYear()} года`
    }
})








