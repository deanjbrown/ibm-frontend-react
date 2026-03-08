function App() {
  const currentDate = new Date();
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        The current date is: {currentDate.toLocaleDateString()} -{" "}
        {currentDate.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default App;
