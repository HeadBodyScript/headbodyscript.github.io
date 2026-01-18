// curve -> pricing

interface _SessionData {
   SessionData: {
    array: Array<string>
    disable: boolean
   };
} 

export default async function PageTag({SessionData}: _SessionData) {
  console.log(SessionData)
  if (SessionData.disable == true) {return null}
  return (
    <>
      <section className="ui-section-customer">
        <div className="ui-layout-container">
          <div className="ui-section-customer__layout ui-layout-flex">
            {
              SessionData.array.map((item: any) => (
                <>
                  {/* make item[i] a part to an HREF */}
                  <img src="https://res.cloudinary.com/uisual/image/upload/assets/logos/facebook.svg" alt="#" className="ui-section-customer--logo"></img>
                </>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}
