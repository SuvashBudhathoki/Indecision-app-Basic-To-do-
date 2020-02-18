//contains jsx

const app = {
  title: "Indecision App",
  subtitle: "what can it be?",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  //to get the value user typed if any
  //e.target going to point to the element that the event started on
  //options is the name of form defined

  const option = e.target.elements.option.value;

  //check if value is given or not and if given, push in options in app object
  if (option) {
    app.options.push(option);

    //clear whaterver input typed in

    e.target.elements.option.value = "";
    renderCount();
  }
};

//create Remove All button above list
//on click - > wipe the array -> rerender

const removeAll = () => {
  app.options = [];
  renderCount();
};

const onMakeDecision = () => {
  // generate random number as the options array
  //math.floor will round up as random will give in decimal from 0 t0 1
  // * options.lenght will increase the range according to the array length
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderCount = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p> Subtitle: {app.subtitle}</p>}
      <p> {app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>
        What should I do?
      </button>
      <button onClick={removeAll}> Remove All </button>

      <ol>
        {app.options.map(option => {
          return <li key={option}> Item : {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderCount();
