export function Greating({ name, age }) {
    return (
        <h2>
            Greating {name} ! Vous avez {age}
        </h2>
    );
}

export default function Hello({ children }) {
    return (
        <>
            <h1>Hello World !</h1>
            {children}
        </>
    );

}
