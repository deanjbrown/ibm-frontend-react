import useFetch from "../hooks/useFetch";
import "./FetchData.css";

// This component demonstrates how to use the useFetch custom hook to fetch data from an API and render it. 
// The data is expected to be an array of objects, each with properties like id, name, importance, benefits, 
// and best_time_to_intake. We map over the data and display these properties in a list format.
function FetchData() {
  const data = useFetch("https://api.npoint.io/36c774d58aa722d0da42");
  return (
    <>
      <h1>Fetch Data Using Custom Hook</h1>
      <ul className="list_data_main">
        {data &&
          data.map((item) => (
            <li key={item.id} className="list_data_item">
              <h3>{item.name}</h3>
              <p>
                <strong>Importance: </strong>
                {item.importance}
              </p>
              <p>
                <strong>Benefits: </strong>
                {item.benefits}
              </p>
              <p>
                <strong>Time to eat: </strong>
                {item.best_time_to_intake}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default FetchData;
