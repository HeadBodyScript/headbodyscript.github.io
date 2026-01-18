import ComponentCollaborator from "@/components/section/collaborator";
import ComponentContributor from "@/components/section/contributor";
import ComponentDownload from "@/components/section/download";
import ComponentFeature from "@/components/section/feature";
import ComponentLink from "@/components/section/link";
import ComponentMain from "@/components/section/main";
import ComponentTag from "@/components/section/tag";
import ComponentInformation from "@/components/section/information";
import ComponentNavDownload from "@/components/section/nav-download";

export default async function index() {





// This can later be pulled from a db or something
const ComponentDataMain = {
  graphic: "https://sw6.elbenwald.de/media/e8/55/97/1747867725/E1088415_3.jpg",
  title: "Hatsune Miku Texture Pack",
  description: "Are you tired of playing alone? I bet you are, download this amazing texture pack and add the one and only Hatsune Miku to your minecraft world",
  version: "1.2.7",
  disable: false // if true -> return null / skip the module
}

const ComponentDataTag = {
  array: [
    "One",
    "Two"
  ],
  disable: false
}

const ComponentDataNavDownload = {
    title: "string",
    description: "string",
    buttonMessage: "string",
    buttonDescription: "string",
    disable: false
}

const ComponentDataFeature = {
    array: [
      {
        title: "string",
        description: "string",
        graphic: "string",
        list: ["stuff"]
      }
    ],
    disable: false
}

const ComponentDataInformation = {
    array: [
      {
        title: "string",
        description: "string"
      }
    ],
    disable: false
}

const ComponentDataDownload = {
    array: [
      {
        title: "string",
        description: "string"
      }
    ],
    disable: false
}

  return (
    <>
          <ComponentMain SessionData={ComponentDataMain}/>
          <ComponentTag SessionData={ComponentDataTag}/>
          <ComponentNavDownload SessionData={ComponentDataNavDownload}/>
          <ComponentFeature SessionData={ComponentDataFeature}/>
          <ComponentInformation SessionData={ComponentDataInformation}/>
          <ComponentDownload SessionData={ComponentDataDownload}/>
          <ComponentLink SessionData={}/>
          <ComponentCollaborator SessionData={}/>
          <ComponentContributor SessionData={}/>
    </>
  );
}
