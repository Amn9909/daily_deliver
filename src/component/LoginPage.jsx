// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import "./Login.css";

// const LoginPage = () => {
//   const [action] = useState("signup");
//   const handleOnChange = (event) => {
//     console.log('this is event ', event)
//     const value = event.target.value;
//     console.log('this is value ', value)
//     console.log("working");
//   };
//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{action} </div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         <div className="input">
//           <input type="text" placeholder="Name" />
//         </div>
//       </div>
//       <div className="inputs">
//         <div className="input" onChange={(event)=>handleOnChange(event)}>
//           <input type="Email" placeholder="email" />
//         </div>
//       </div>
//       <div className="inputs">
//         <div className="input">
//           <input type="Password" placeholder="password" />
//         </div>
//       </div>
//       <div className="forgetPassword">forgetPassword</div>
//       <div className="submit-container">
//         <div className={action === "signup" ? "submit gray" : "submit"}>
//           signup
//         </div>
//         <div className={action === "login" ? "submit gray" : "submit"}>
//           Login
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;