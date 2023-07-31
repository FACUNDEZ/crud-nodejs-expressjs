import express from "express"
const app = express()

app.use(express.json())

let tasks = [
    { id: 1, title: 'Hacer la compra' },
    { id: 2, title: 'Limpiar la casa' },
    { id: 3, title: 'Estudiar para el examen' }
];

app.get("/tasks", (req, res) => {
    res.send(tasks)
})

app.post("/addedTask", (req, res) => {
    const { id, title, } = req.body

    const newTask = { id, title }
    tasks.push(newTask)

    res.json({ tasks })
})

app.get("/getTask/:id", (req, res) => {
    const { id } = req.params

    const index = tasks.findIndex((task) => task.id == id)
    const title = tasks[index].title

    if (tasks[index].id != -1) {
        res.json({title})
    }
})

app.put("/updatedTask/:id", (req, res) => {
    const { id } = req.params

    const index = tasks.findIndex((task) => task.id == id)

    if (index != -1) {
        tasks[index].title = req.body.title
    }

    res.json(tasks)
})

app.delete("/deletedTask/:id", (req, res) => {
    const { id } = req.params

    tasks = tasks.filter((usuario) => usuario.id != id)
    
    res.json(tasks)
})

app.listen(3000, () => {
    console.log("El servidor corre desde el puerto 3000")
})