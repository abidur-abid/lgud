const { default: app } = require("./firebase.config");
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default auth;