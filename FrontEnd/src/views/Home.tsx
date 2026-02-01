import { useState } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import yearofthewagon from '/yearofthewagon.jpg'
function Home() {

 // const {user} = useAuth();
  const [count, setCount] = useState(0)

return (

 <div className="page">
<img src={yearofthewagon} className="image" alt="HF" />
   </div>

  );
}


export default Home;