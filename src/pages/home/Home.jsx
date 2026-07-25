import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export default function Home() {
  return (
    <>
      <Section1 />
     <div className="px-5 lg:px-20 xl:px-48 py-2">
       <Section2 />
     </div>
    </>
  );
}
