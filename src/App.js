import "./App.css";
import Forward from "./Forward";
import HOC from "./HOC";
import TodoList from "./TodoList";
import SearchUsers from "./UsersList";

function App() {
  return (
    <div style={{marginTop:'2rem',marginBottom:'2rem',textAlign:'center',display:'flex',flexDirection:'column'}}>
      <h2>Higher Order Component</h2>
      <div className="section">
        <div>
          {/* <SearchUsers /> */}
          <HOC WrappedComponenet={SearchUsers} entity={"users"}/>
        </div>
        <div>
          {/* <SearchTodos /> */}
          <HOC WrappedComponenet={TodoList} entity={"todos"}/>
        </div>
      </div>
      <h2 style={{marginTop:'2rem',marginBottom:'2rem',textAlign:'center',display:'flex',flexDirection:'column'}}>Forward Refrencing Of Components</h2>
      <Forward/>

    </div>
  );
}

export default App;
