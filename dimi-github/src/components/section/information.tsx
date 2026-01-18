interface _SessionData {
   SessionData: {
    array: Array<{
      title: string
      description: string
    }>
    disable: boolean
   };
} 

export default async function PageInformation({SessionData}: _SessionData) {
  console.log(SessionData)
  if (SessionData.disable == true) {return null}
  return (
    <>
    <section className="ui-section-faq">
        <div className="ui-layout-container">
          <div className="ui-section-faq__layout ui-layout-grid ui-layout-grid-2">
            <div>
              <h4 className="ui-component-list--item ui-section-faq--question">Lorem ipsum dolor?</h4>
              <p className="ui-section-faq--answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <h4 className="ui-component-list--item ui-section-faq--question">Lorem ipsum dolor?</h4>
              <p className="ui-section-faq--answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <h4 className="ui-component-list--item ui-section-faq--question">Lorem ipsum dolor?</h4>
              <p className="ui-section-faq--answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <h4 className="ui-component-list--item ui-section-faq--question">Lorem ipsum dolor?</h4>
              <p className="ui-section-faq--answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <p className="ui-section-faq--note">Still have questions? <a href="#" role="link" aria-label="#">Contact us</a>.</p>
        </div>
      </section>
    </>
  );
}
