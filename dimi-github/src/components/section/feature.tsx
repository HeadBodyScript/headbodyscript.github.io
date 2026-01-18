interface _SessionData {
   SessionData: {
    array: Array<{
      title: string
      description: string
      graphic: string
      list: Array<string>
    }>
    disable: boolean
   };
} 

export default async function PageFeature({SessionData}: _SessionData) {
  console.log(SessionData)
  if (SessionData.disable == true) {return null}
  return (
    <>
    <section className="ui-section-feature">
        <div className="ui-layout-container">
          <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
            <img src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png" alt="#" className="ui-image-half-left"></img>
            <div>
              <h2>Nice Features</h2>
              <p className="ui-text-intro">Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco nisi equi.</p>
              <ul className="ui-component-list ui-component-list-feature ui-layout-grid">
                <li className="ui-component-list--item ui-component-list--item-check">Unlimited domain names.</li>
                <li className="ui-component-list--item ui-component-list--item-check">150&plus; components.</li>
                <li className="ui-component-list--item ui-component-list--item-check">Lifetime updates.</li>
                <li className="ui-component-list--item ui-component-list--item-check">24/7 technical support.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
