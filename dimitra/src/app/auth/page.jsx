import Auth from "dimi/components/auth";
import "dimi/app/assets/css/auth.css";
export default function auth() {

  return (
      <main className="center w-dvw h-dvh bg-neutral-300 text-black">
        <div className="w-dvw md:rounded-lg md:w-285 min-h-dvh md:min-h-200 shadow bg-white row">
          <div className="invisible md:visible w-0 rounded-lg md:w-[calc(100%_-_450px)] md:max-w-135 h-200" style={{ backgroundImage: "url(https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/img/auth.webp?raw=true)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="w-dvw md:w-150 h-200 p-8 center column">
            <div className="center invisible md:visible">
              <img className="invert h-40" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/alt/android-chrome-192x192.png?raw=true" alt="website-icon" />
            </div>
            <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
            <h2 className="text-center">Please enter your credentials</h2>
              <Auth></Auth>
              <div className="wrapper mt-12 manual">
                <div className="center column redirect">
                      <form id="userFormLogin" className="column md:w-134">
                        <label htmlFor=""><strong>Example@example.com</strong></label>
                        <input className="w-auto" type="" id="" placeholder=""></input>
                        <label htmlFor=""><strong>Password</strong></label>
                        <input className="w-auto" type="" id="" placeholder=""></input>   
                        <button type="button" id="IDuserLogin" className="gsi-material-button !bg-black !text-white hover:!bg-neutral-800 hover:!text-white !border-red-50">
                            <div className="gsi-material-button-state"></div>
                            <div className="gsi-material-button-content-wrapper">
                            <span className="gsi-material-button-contents">
                              Login
                            </span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                              </svg>
                            </div>    
                        </button>
                      </form>
                    </div>
                </div>
                <div className="text-gray mt-2">
                  <span className="text-sm">By creating an account, you agree to our <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://headbodyscript.nl/terms-of-service">Terms of Service</a> and <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://headbodyscript.nl/privacy-policy">Privacy Policy</a></span>
                    <div className="center column mt-2">
                  <span className="text-neutral-500">Don't have an account? <a className="text-blue-600 dark:text-blue-500 hover:underline" href="">Sign up</a></span>
                  </div>
                </div>
              </div>
            </div>
        </main>
  );
}
