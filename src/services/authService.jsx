import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from '../firebase.config'

const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
}

const logoutUser = () => {
     signOut(auth)
}

export { createUser, signInUser, logoutUser }
