import { useRef } from "react";

export default function App() {
  const paragraphes = [
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui. Lorem ipsum dolor sit
  amet consectetur, adipisicing elit. Excepturi quo laboriosam expedita a
  at mollitia rerum distinctio, modi nostrum dignissimos. Doloremque
  repellat placeat soluta maxime omnis, architecto consequatur dolor qui.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quo
  laboriosam expedita a at mollitia rerum distinctio, modi nostrum
  dignissimos. Doloremque repellat placeat soluta maxime omnis, architecto
  consequatur dolor qui. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Excepturi quo laboriosam expedita a at mollitia rerum
  distinctio, modi nostrum dignissimos. Doloremque repellat placeat soluta
  maxime omnis, architecto consequatur dolor qui.`,
  ];

  const paragraphesRef = useRef([]);

  function handleClick(index) {
    paragraphesRef.current[index].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {paragraphes.map((p, index) => (
        <button
          className="btn btn-primary mr-15"
          onClick={() => handleClick(index)}
        >
          {index}
        </button>
      ))}
      <ul>
        {paragraphes.map((p) => (
          <>
            <li
              ref={(node) => {
                paragraphesRef.current.push(node);
              }}
            >
              {p}
            </li>
            <br />
          </>
        ))}
      </ul>
    </>
  );
}
