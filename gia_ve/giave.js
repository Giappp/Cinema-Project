const titleTable = document.querySelectorAll('.title-table')
const tablePrice = document.querySelectorAll('.table-price')
const contentPrice = document.querySelectorAll('.content-price p')


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { target } = entry;
        target.classList.toggle('active', entry.isIntersecting)
    })
}, {})

titleTable.forEach(card => {
    observer.observe(card)
})

tablePrice.forEach(card => {
    observer.observe(card)
})

contentPrice.forEach(card => {
    observer.observe(card)
})