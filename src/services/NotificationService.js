import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Global configuration for react-toastify
const globalToastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

const notifySuccess = (message) => {
  toast.success(message, globalToastConfig);
};

const notifyError = (message) => {
  toast.error(message, globalToastConfig);
};

const notifyInfo = (message) => {
  toast.info(message, globalToastConfig);
};

const notifyWarning = (message) => {
  toast.warn(message, globalToastConfig);
};

export { notifySuccess, notifyError, notifyInfo, notifyWarning };
