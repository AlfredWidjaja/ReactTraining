
// React Component
function Profile(props) {
  // JSX => Syntactical Sugar utk HTML
  return (
    <div className="Profile">
      <header className="App-Profile">
        <h1>Hello, My Name is {props.name} </h1>
      </header>
    </div>
  );
}

export default Profile;
