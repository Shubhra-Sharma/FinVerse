// import React from "react";
// import { Link } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useNavigate } from 'react-router-dom';

// const EmailSignup = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleRedirect = () => {
//     navigate("/login"); // Change "/signin" to your actual login route
//   };
//   return (
//     <div className="flex justify-center items-center py-10"
//     >
//       <div className="p-4 rounded-lg flex items-center">
//         <input
//           type="email"
//           placeholder="Enter your email..."
//           className="px-4 py-2 w-72 rounded-l-lg focus:outline-none text-gray-700 mr-4 mt-4"
//           style={{ padding: "12px" ,width : '55%' , marginRight: "20px" ,  fontSize: "1rem", borderRadius: "8px 8px 8px 8px"}}
//         />

//         <Link to="/signin">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-r-lg ml-4" style={{width : '25%' , backgroundColor: '#2973B2', borderRadius: "8px 8px 8px 8px"}}>
//           Get Started
//         </button>
//         </Link>
//       </div>
//     </div>
  
    
 
//   );
// };

// export default EmailSignup;

import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const EmailSignup = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px 20px'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '20px',
        width: '100%',
        maxWidth: '1100px',  
        padding: '20px 40px'  
      }}>
        <input
          type="email"
          placeholder="Enter your email..."
          style={{ 
            flex: '1',
            padding: "12px 16px",
            fontSize: "1rem", 
            borderRadius: "8px",
            border: '2px solid black',
            height: '45px'  
          }}
        />
        <Link to="/signin">
          <button 
            style={{
              backgroundColor: '#2973B2',
              color: 'white',
              padding: '1px 24px',
              borderRadius: "8px",
              minWidth: '300px',
              height: '45px',     
              whiteSpace: 'nowrap'
            }}
          >
            Get Started
          </button>
        </Link>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div > div {
              flex-direction: column;
              padding: 20px;
            }
            input {
              width: 100%;
            }
            button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default EmailSignup;