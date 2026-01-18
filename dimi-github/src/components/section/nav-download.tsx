interface _SessionData {
   SessionData: {
    title: string
    description: string
    buttonMessage: string
    buttonDescription: string
    disable: boolean
   };
} 

export default async function PageNavDownload({SessionData}: _SessionData) {
  console.log(SessionData)
  if (SessionData.disable == true) {return null}
    return (
    <>
      <section className="ui-section-close">
        <div className="ui-layout-container">
          <div className="ui-section-close__layout ui-layout-flex">
            <div>
              <h2>{SessionData.title ?? "Ready to start?"}</h2>
              <p className="ui-text-intro">{SessionData.description ?? "Lorem ipsum dolor sit amet consectetur."}</p>
            </div>
            <div className="ui-component-cta ui-layout-flex">
              <a href="#" role="link" aria-label="#" className="ui-component-button ui-component-button-normal ui-component-button-primary">{SessionData.buttonMessage ?? "Get Started for Free"}</a>
              <p className="ui-text-note"><small>{SessionData.buttonDescription ?? "30 days free trial."}</small></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
