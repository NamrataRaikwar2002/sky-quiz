import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from '../firebase.config'

const signInUser = async (email:string, password:string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const createUser = async (email:string, password:string) => {
  return await createUserWithEmailAndPassword(auth, email, password)
}

const logoutUser = () => {
     signOut(auth)
}

export { createUser, signInUser, logoutUser }
