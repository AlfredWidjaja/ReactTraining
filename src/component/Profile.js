
// React Component
function Profile(props) {
  // JSX => Syntactical Sugar utk HTML
  const {name, hobby} = props
  return (
    <div className="m-3">
        <h3>Hello, My Name is {name} </h3>
        <p>Hobi saya adalah {hobby}</p>
    </div>
  );
}

export default Profile;
