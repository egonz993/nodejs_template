
const controller = {}

controller.index = (req, res) => {
    console.log("req: root")
    res.send("Conexion Exitosa")
}

controller.users = (req, res)=>{
    console.log("req: /users")
    const user = [{
        name: "Eduardo",
        lastname: "Gonzalez",
        age: 29
    },
    {
        name: "Yubisali",
        lastname: "Marquina",
        age: 30
    }]
    res.send(user)
}

export const Controllers = controller