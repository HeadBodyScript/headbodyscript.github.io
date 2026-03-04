// import Test from "@/components/test";
// import Footer from "@/components/footer";
// import json from "./data.json"


export default async function index() {

// export default async function index({ params, }: { params: Promise<{ slug: number }> }) {
//     const { slug } = await params

  let slug = 1
  let i = 0
    const responseData = await import(`../data/${slug}.json`)
    
    console.log(slug);
    

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <p> test {slug}</p>
{
  responseData.structure.map((item: any) => (
    
    // <div key={item}>
    <div key={i++}>
        <p className="mr-2 ml-2"> {item.id} </p>
      {/* {item.id == "001" && <Footer />}
      {item.id == "002" && <Test />} */}
    </div>

  ))
}


    </div>
  );
}
