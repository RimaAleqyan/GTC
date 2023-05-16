import {useEffect, useState} from "react";
import LoginForm from "./LoginForm";


function App(){
    
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users').then(res => res.json()).then(setUser)
  }, [])

return(
    <div>
        {
         user.map(item=> <div key={item.id}>
                <p>{item.id}</p>
                <img src={item.avatar_url}/>
            </div>)
        }
    </div>
)

}

export default App;