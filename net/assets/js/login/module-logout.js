function githubLogout() {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user")
      localStorage.removeItem("user-credential")
      localStorage.removeItem("user-token")
    })
    .catch((error) => {
      console.log("check failed")
    })
}
