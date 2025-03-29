// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// export const LogIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8888/api/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         setError("Login failed. Please check your credentials.");
//         return;
//       }

//       const data = await response.json();
//       // Save the token if returned by the API (e.g., data.token)
//       localStorage.setItem("token", data.token);
//       // Redirect to the next page (e.g., dashboard)
//       navigate("/data");
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="log-in">
//       <div className="quote-image-bottom-wrapper">
//         <div className="quote-image-bottom">
//           <div className="content-35">
//             <img className="stars" alt="Stars" src="/img/stars.svg" />
//             <div className="text-and-supporting-16">
//               <p className="text-50">
//                 Web Application for Managing &amp; Tracking Influencer Income (MTII)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="section-6">
//         <div className="container-3">
//           <div className="content-36">
//             <header className="header">
//               <div className="logomark">
//                 <div className="content-37">
//                   <img className="star-5" alt="Star" src="/img/star-39.svg" />
//                 </div>
//               </div>
//               <div className="text-and-supporting-17">
//                 <div className="text-51">Welcome back</div>
//                 <p className="supporting-text-12">
//                   Welcome back! Please enter your details.
//                 </p>
//               </div>
//             </header>

//             <div className="content-38">
//               {/* Wrap inputs in a form with an onSubmit handler */}
//               <form onSubmit={handleLogin} className="form-5">
//                 <div className="div-6">
//                   <div className="div-6">
//                     <div className="label-wrapper-7">
//                       <label className="label-7" htmlFor="username">
//                         Username
//                       </label>
//                     </div>
//                     <div className="input-6">
//                       <input
//                         className="content-39"
//                         id="username"
//                         placeholder="Enter your username"
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="div-6">
//                   <div className="div-6">
//                     <div className="label-wrapper-7">
//                       <label className="label-8" htmlFor="password">
//                         Password
//                       </label>
//                     </div>
//                     <div className="input-6">
//                       <input
//                         className="content-39"
//                         id="password"
//                         placeholder="Enter Your Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {error && <p style={{ color: "red" }}>{error}</p>}

//                 <div className="actions-16">
//                   <button type="submit" className="login-button">
//                     <img
//                       className="buttons-button-8"
//                       alt="Login"
//                       src="/img/buttons-button-8.svg"
//                     />
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="footer" />
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import Link
import api, { apiRequests } from "../../api";
import "./style.css";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To redirect on success

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh
  
    try {
      const response = await apiRequests.login({
        username,
        password,
      });
  
      console.log("Full Response:", response); // Debugging: check response structure
  
      // Fix token retrieval: response.data.data.token instead of response.data.token
      if (response.data.data.token) {
        localStorage.setItem("authToken", response.data.data.token);
        navigate("/data"); // Redirect to /data page
      } else {
        setError("Login failed. Invalid response from server.");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };
  

  return (
    <div className="log-in">
      <div className="quote-image-bottom-wrapper">
        <div className="quote-image-bottom">
          <div className="content-35">
            <img className="stars" alt="Stars" src="/img/stars.svg" />

            <div className="text-and-supporting-16">
              <p className="text-50">
                Web Application for Managing &amp; Tracking Influencer Income
                (MTII)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6">
        <div className="container-3">
          <div className="content-36">
            <header className="header">
              <div className="logomark">
                <div className="content-37">
                  <img className="star-5" alt="Star" src="/img/star-39.svg" />
                </div>
              </div>

              <div className="text-and-supporting-17">
                <div className="text-51">Welcome back</div>

                <p className="supporting-text-12">
                  Welcome back! Please enter your details.
                </p>
              </div>
            </header>

            <form onSubmit={handleLogin} className="content-38">
              <div className="form-5">
                <div className="div-6">
                  <div className="div-6">
                    <div className="label-wrapper-7">
                      <input
                        className="label-7"
                        htmlFor="username"
                        placeholder="Username"
                        type="text"
                      />
                    </div>

                    <div className="input-6">
                      <input
                        className="content-39"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="div-6">
                  <div className="div-6">
                    <div className="label-wrapper-7">
                      <label className="label-8" htmlFor="password">
                        Password
                      </label>
                    </div>

                    <div className="input-6">
                      <input
                        className="content-39"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {error && <p className="error-message">{error}</p>}

              <div className="actions-16">
                <button type="submit" className="login-button">
                  <img
                    className="buttons-button-8"
                    alt="Login button"
                    src="/img/buttons-button-8.svg"
                  />
                </button>
              </div>

            </form>
          </div>
        </div>

        <div className="footer" />
      </div>
    </div>
  );
};