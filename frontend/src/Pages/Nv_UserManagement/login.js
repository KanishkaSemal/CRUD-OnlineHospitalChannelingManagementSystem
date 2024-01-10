// import axios from "axios";
// import React, { useState ,useEffect} from "react";
// import { NavLink, useHistory } from 'react-router-dom';
// import './Nv_login.css';


// function Login() {
//   const history = useHistory();
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [userType, setUserType] = useState('') 


//   useEffect(() => {

//     sessionStorage.setItem('LogUserId', "");
//     sessionStorage.setItem('LogUserName', "");
//     sessionStorage.setItem('LogUserRole',"");

//   });

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`http://localhost:8000/${userType}/signin`, {
//         email,
//         password
//       });
//       if (response.status === 200) {

//         sessionStorage.setItem('LogUserId', response.data.data.compId);
//         sessionStorage.setItem('LogUserName', response.data.data.fname+" "+response.data.data.lname);
//         sessionStorage.setItem('LogUserRole',userType);

//         switch (userType) {
//           case 'patient':
//             history.push('/PatientsDashboard');
//             break;
//           case 'doctor':
//             history.push('/DoctorDashboard');
//             break;
//           case 'admin':
//             history.push('/AdminDashboard');
//             break;
//           case 'staff':
//             history.push('/StaffDashboard');
//             break;
//           default:
//             break;
//         }
//       } else {
//         alert('User has not signed up');
//       }
//     } catch (error) {
//       alert('Wrong details');
//       console.error(error);
//     }
    
//   }


// return (
//   <div className="login" >
//     <div className="bg-img">
//     <form onSubmit={submit} className="login-form" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '1rem' ,marginRight:'5rem' }}>
//       <h3 className="login-form__title" style={{ marginBottom: '2rem' }}>Login</h3>

//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="userType" className="form-label">Select User Type</label>
//         <select
//           className="form-control"
//           onChange={(e) => setUserType(e.target.value)}
//           value={userType}
//         >
//           <option value="patient">Patient</option>
//           <option value="doctor">Doctor</option>
//           <option value="admin">Admin</option>
//           <option value="staff">Staff</option>
//         </select>
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary login-form__submit-button" style={{ marginTop: '2rem' }}>
//           Login
//         </button>
//       </div>

//       <p className="forgot-password text-right" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
//         New User? <a href="/signup">sign up</a>
//       </p>
//     </form>
//     </div>
//   </div>
// );
// }

//   export default Login

import axios from "axios";
import React, { useState ,useEffect} from "react";
import { NavLink, useHistory } from 'react-router-dom';
import './Nv_login.css';


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('') 


  useEffect(() => {

    sessionStorage.setItem('LogUserId', "");
    sessionStorage.setItem('LogUserName', "");
    sessionStorage.setItem('LogUserRole',"");

  });

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8000/${userType}/signin`, {
        email,
        password
      });
      if (response.status === 200) {

        sessionStorage.setItem('LogUserId', response.data.data.compId);
        sessionStorage.setItem('LogUserName', response.data.data.fname+" "+response.data.data.lname);
        sessionStorage.setItem('LogUserRole',userType);

        switch (userType) {
          case 'patient':
            history.push('/PatientsDashboard');
            break;
          case 'doctor':
            history.push('/DoctorDashboard');
            break;
          case 'admin':
            history.push('/AdminDashboard');
            break;
          case 'staff':
            history.push('/StaffDashboard');
            break;
          default:
            break;
        }
      } else {
        alert('User has not signed up');
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
    
  }


return (
  <div className="login" >
    <div className="bg-img">
    <form onSubmit={submit} className="login-form" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '1rem' ,marginRight:'5rem' }}>
      <h3 className="login-form__title" style={{ marginBottom: '2rem' }}>Login</h3>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userType" className="form-label">Select User Type</label>
        <select
          className="form-control"
          onChange={(e) => setUserType(e.target.value)}
          value={userType}
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary login-form__submit-button" style={{ marginTop: '2rem' }}>
          Login
        </button>
      </div>
   

      {userType === 'admin' && (
  <p className="forgot-password text-right" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
    New Admin? <a href="/signup">Sign Up</a>
  </p>
)}

    </form>
    </div>
  </div>
);
}

  export default Login



