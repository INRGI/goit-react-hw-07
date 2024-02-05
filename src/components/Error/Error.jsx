import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = ({ msg }) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return null;
};


export default Error;