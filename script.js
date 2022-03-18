

const body = document.querySelector('body')


fetch("http://localhost:3000/recipes")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            const title = document.createElement('h2')
            const date = document.createElement('p')
            const cookingTime = document.createElement('p')
            const content = document.createElement('p')
            title.textContent = data[i].title
            date.textContent = data[i].date
            cookingTime.textContent = data[i]['cooking time']
            content.textContent = data[i].content
            body.append(title)
            body.append(date)
            body.append(content)
            body.append(cookingTime)
        }
    })
