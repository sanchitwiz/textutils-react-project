// import React from "react";
// // import PropTypes from 'prop-types'

// export default function Navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           TextUtils
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 About
//               </a>
//             </li>
//           </ul>
//           <div class={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
//           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.colorChange('red')}/>
//           <label className="form-check-label" htmlFor="flexRadioDefault1">
//             Red  
//           </label>
//           </div>
//           <div class={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
//           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.colorChange('blue')}/>
//           <label className="form-check-label" htmlFor="flexRadioDefault1">
//             Blue  
//           </label>
//           </div>
//           <div class={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
//           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.colorChange('green')} />
//           <label className="form-check-label" htmlFor="flexRadioDefault1">
//             Green  
//           </label>
//           </div>
//           <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
//             <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// Navbar.propTypes = {
    // title: PropTypes.string.isRequired,
    //this (.isRequired) is used, only when default props are not set, but it is required to set Props for that part
    // home : PropTypes.string.isRequired
// }
//they are used to make check, whether we are not going to push any undetermined datatypes as Propes, so it could create any kind of error!



// Navbar.defaultProps = {
//     title: "Set Title Here",
//     home: "Set Home Here"
// }
//this is the default Props, it shows that, we are going to pass the props, but not now!





import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ backgroundColor: props.mode === 'light' ? '#696969' : 'dark' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => props.colorChange('red')} key="red" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Red  
            </label>
          </div>
          <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => props.colorChange('blue')} key="blue" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Blue  
            </label>
          </div>
          <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={() => props.colorChange('green')} key="green" />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Green  
            </label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
