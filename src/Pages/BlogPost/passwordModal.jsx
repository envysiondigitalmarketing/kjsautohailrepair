import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const PasswordModal = ({ showModal, onPasswordSubmit }) => {

    const PASS = "123456";

    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    // console.log("showModal", showModal);
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    useEffect(() => {
        if(redirect){
            return window.location.href = "/";
        }
    },[redirect])

    const handleSubmit = (e) => {
      e.preventDefault();

      if (password === PASS) {
          onPasswordSubmit();
        // Save the information about password verification in localStorage
        localStorage.setItem("passwordVerified", "true");

      } else {
          setRedirect(true);
      }
      return null;
    };
  
    return (
      showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-gray-800 bg-opacity-75 p-4">
            <form className="bg-white p-8 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Enter Password</h2>
              <input
                type="password"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )
    );
  };

export default PasswordModal;