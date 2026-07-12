import "./MealsSelection.css";

function MealsSelection({
  meals,
  numberOfPeople,
  onMealToggle,
  onSetNumberOfPeople,
}) {
  return (
    <div className="meals-selection">
      {meals.map((meal, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
        >
          <input
            type="checkbox"
            checked={meal.selected}
            onChange={() => onMealToggle(index)}
          />
          <label>
            {meal.name} - ${meal.cost.toFixed(2)}
          </label>
        </div>
      ))}
      <div className="number-of-people-container">
        <label htmlFor="number-of-people">Number of People:</label>
        <input
          type="number"
          id="number-of-people"
          name="number-of-people"
          min="1"
          value={numberOfPeople}
          onChange={(e) => onSetNumberOfPeople(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default MealsSelection;
