export const resolver = {
    getHello({ name }) {
        return "Hello " + name
    },
    age: 17,
    weight: 34.5,
    isOver: true,
    hobbies: ["one", "two"],
    user: () => ({
        id: 11,
        name: "Demo1",
        family: [
            { id: 22, name: "Roman" },
            { id: 33, name: "Laura" }
        ]
    })
}