import Auth from '@/components/app/auth/auth';
export default function auth() {
  return (
      <main className="center w-dvw h-dvh bg-neutral-300 text-black">
        <div className="w-dvw md:rounded-lg md:w-285 min-h-dvh md:min-h-200 shadow bg-white row">
          <div className="invisible md:visible w-0 rounded-lg md:w-[calc(100%_-_600px)] md:max-w-135 h-200" style={{ backgroundImage: "url(auth.webp)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="w-dvw md:w-150 h-200 p-8 column">
            <div className="center h-12 md:visible">
              <img className="invert h-12" src="android-chrome-192x192.png" alt="website-icon" />
            </div>
            <h1 className="text-3xl font-bold text-center">Login To Dim</h1>
            <h2 className="text-center">Please enter your credentials</h2>
              <Auth></Auth>
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
