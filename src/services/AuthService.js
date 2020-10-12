import firebase from 'firebase/app'
import 'firebase/auth'

const initService = () => {
  console.log('Debug- initService')
  console.log(process.env)
  console.log(process.env.NODE_ENV)

  console.log(process.env.NODE_FIREBASE_CONFIG2)
  console.log(process.env.NODE_FIREBASE_CONFIG)
  console.log(process.env.VUE_APP_FIREBASE_CONFIG)
  console.log(process.env.NODE_BASE_URL)

  // for non-prod, config will load from file
  // for prod, config will load directly from env property
  const config = (process.env.NODE_ENV === 'production') ? process.env.VUE_APP_FIREBASE_CONFIG : require(process.env.VUE_APP_FIREBASE_CONFIG)

  firebase.initializeApp(config)
}

export const SOCIAL_LOGIN_PROVIDERS = {
  GOOGLE: new firebase.auth.GoogleAuthProvider(),
  FACEBOOK: new firebase.auth.FacebookAuthProvider()
}

const socialLogin = async (provider) => {
  // alert('socialLogin')
  const firebaseAuth = await firebase.auth().signInWithPopup(provider)

  if (firebaseAuth) {
    console.log(firebaseAuth)
    alert('login success')
  }
}

const socialLoginAndRedirect = async (provider, router, targetPage) => {
  try {
    // const firebaseAuth = await firebase.auth().signInWithPopup(provider)
    await firebase.auth().signInWithPopup(provider)

    alert('login success')
    // // do this in call back or just wait for result??
    // if (firebaseAuth) {
    //   const userProfile = await getProfileFromAPI(firebaseAuth.uid)

    //   if (userProfile) {
    //     // update user profile to store
    //     await saveUserProfileToStore(userProfile)

    //     // redirect to target page
    //     router.push(targetPage)
    //   } else {
    //     router.push(registrationPagePath)
    //   }
    // }
  } catch (err) {
    return Promise.reject(err)
  }
}

export default {
  initService,
  socialLogin,
  socialLoginAndRedirect
}
