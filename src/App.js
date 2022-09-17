import "./styles.css";
import { useState } from "react";
let id = 0;
export default function App() {
  const [c1, nc1] = useState(0);
  const [c2, nc2] = useState(0);
  const [c3, nc3] = useState(0);
  let li = [
    { id: id++, one: 2, two: 4, three: 5 },
    { id: id++, one: 7, two: 8, three: 9 }
  ];
  const [data, setData] = useState(li);
  let tem = 0;
  let list = data.map((el) => {
    tem = tem + Number(el.one) + Number(el.two) + Number(el.three);
    return (
      <>
        <tr>
          <td>{el.one}</td>
          <td>{el.two}</td>
          <td>{el.three}</td>
          <td>
            <button
              onClick={() => {
                let li = data.filter((e) => e.id !== el.id);
                setData(li);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <div className="App">
      <table>
        <tr>
          <th>Column-1</th>
          <th>Column-2</th>
          <th>Column-3</th>
          <th></th>
        </tr>
        {list}
        <tr>
          <td>
            <input
              value={c1}
              onChange={(n) => {
                nc1(n.target.value);
              }}
              type="number"
            />
          </td>
          <td>
            <input
              value={c2}
              onChange={(n) => {
                nc2(n.target.value);
              }}
              type="number"
            />
          </td>
          <td>
            <input
              value={c3}
              onChange={(n) => {
                nc3(n.target.value);
              }}
              type="number"
            />
          </td>
          <td>
            <button
              onClick={() => {
                let li = data.slice();
                li.push({ id: id++, one: c1, two: c2, three: c3 });
                setData(li);
                nc1(0);
                nc2(0);
                nc3(0);
              }}
            >
              Add
            </button>
          </td>
        </tr>
      </table>
      <h1 className="sum">Sum of all numbers = {tem}</h1>
    </div>
  );
}
