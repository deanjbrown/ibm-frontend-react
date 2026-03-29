import useFetch from "../hooks/useFetch";

// This component is similar to FetchData.jsx but it fetches yoga data instead of food data. The structure of the data is also different, 
// so we need to adjust the rendering accordingly.
function FetchYogaData() {
  const data = useFetch("https://api.npoint.io/4459a9a10e43812e1152");
  return (
    <>
      <h1>Fetch Yoga Data</h1>
      <ul className="list_data_main">
        {data &&
          data.map((item) => (
            <li key={item.id} className="list_data_item">
              <h3>{item.name}</h3>
              <p>
                <strong>Benefits: {item.benefits}</strong>
              </p>
              <p>
                <strong>Time duration: {item.time_duration}</strong>
              </p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default FetchYogaData;
