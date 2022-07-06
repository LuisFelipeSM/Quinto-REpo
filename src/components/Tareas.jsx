const tareas = [
    {
        id: 1,
        texto: 'Ir al doctor',
        fecha: '5 de julio 2022',
        terminada: true,

    },
    {
        id: 2,
        texto: 'Ir al cine',
        fecha: '10 de julio 2022',
        terminada: false
    },
    {
        id: 3,
        texto: 'Ir al supermercado',
        fecha: '11 de julio 2022',
        terminada: false
    }
]

const Tareas = () => {
    return (
    <>
    {tareas.map((tareas)=>(<h3 key={tarea.id}>{tarea.texto}</h3>))}
    </>
    )
}

export default Tareas