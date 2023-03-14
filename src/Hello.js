export function Greating({ name, age }) {
    return <h2>Greating {name} ! Vous aves {age}</h2>;
}

export default function Hello({ props }) {

    return <Greating {...props} />; //{name={name} age={age}}
}
