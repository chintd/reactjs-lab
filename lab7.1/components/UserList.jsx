import "./UserList.css";

const UserList =(props)=>{
    return (<div className="container">
        <ul>
        {props.items.map(el=><li key={el.id}>{el.username} ({el.age} year old)</li>)}
        </ul>
        </div>)

}
 export default UserList;