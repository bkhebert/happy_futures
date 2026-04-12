import { useState } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import productImage from '/yearofthewagon.jpg'
function Home() {

 // const {user} = useAuth();
  const [count, setCount] = useState(0)

return (
 <div className="min-h-screen bg-dark-gradient bg-fixed flex items-center justify-center px-6 py-10">
      
      {/* Container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
        
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          
          {/* Company Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-highlight">
            Happy Futures Robotics
          </h1>

          {/* Logo */}
          <div className="w-32 h-32 bg-surface border border-border rounded-xl flex items-center justify-center">
            <span className="text-muted">Logo</span>
          </div>

          {/* Description */}
          <p className="text-muted text-base md:text-lg max-w-md">
            Brief description of your company or product. Keep this concise and impactful.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          
          {/* Product Image */}
          <img
            src={productImage}
            alt="Product"
            className="w-full max-w-md rounded-xl border border-border shadow-lg"
          />

          {/* Product Description */}
          <p className="text-muted text-base md:text-lg text-center max-w-md">
            Brief description of the product you're selling. Highlight what makes it valuable.
          </p>

        </div>

      </div>
    </div>
  );
}


export default Home;