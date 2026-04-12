import { useState } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import yearofthewagon from '/yearofthewagon.jpg'
function Home() {

 // const {user} = useAuth();
  const [count, setCount] = useState(0)

return (
    <div className="w-full flex justify-center">
      <img
        src={yearofthewagon}
        className="w-full max-w-6xl"
        alt="HF"
      />
    </div>
  );
}


export default Home;