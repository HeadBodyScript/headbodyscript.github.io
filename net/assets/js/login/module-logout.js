
document.getElementById("logout").addEventListener('click', githubLogout)
function githubLogout(){
  console.log("check 1")
const auth = getAuth();
signOut(auth).then(() => {
  console.log("check 2")
  localStorage.removeItem("user");
  localStorage.removeItem("user-credential");
  localStorage.removeItem("user-token");
  location.reload()
}).catch((error) => {
  console.log("check failed")
});
}