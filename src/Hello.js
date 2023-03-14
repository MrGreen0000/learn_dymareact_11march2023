export function Greating() {
    return <h2>Greating !</h2>;
}

export default function Hello({ name, age, majeur }) {
    console.log(name, age, majeur)
    return <h1>Helllo {name} !</h1>;
}
