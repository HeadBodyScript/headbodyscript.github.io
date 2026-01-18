// this defines all the information is needed to build this component

interface _SessionData {
   SessionData: {
    title: string
    version: string
    description: string
    graphic: string
    disable: boolean
   };
} 

export default async function PageMain({SessionData}: _SessionData) {
  console.log(SessionData)
  if (SessionData.disable == true) {return null}
  return (
    <>
    <section className="ui-section-main">
        <div className="ui-layout-container">
          <div className="ui-section-main__layout ui-layout-grid ui-layout-grid-2">
            <div>
              <h1>{SessionData.title}</h1>
              <p className="ui-text-intro">{SessionData.description}.</p>
              <div className="ui-component-cta ui-layout-flex">
                <a href="#" role="link" aria-label="#" className="ui-component-button ui-component-button-normal ui-component-button-primary">Download</a>
                <p className="ui-text-note"><small>{SessionData.version}</small></p>
              </div>
            </div>
            <img src={SessionData.graphic} loading="lazy" alt="#" className="ui-image-half-right"></img>
          </div>
        </div>
      </section>
    </>
  );
}
