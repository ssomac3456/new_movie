import { Blocks } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className=" min-h-screen flex items-center justify-center ">
      <Blocks
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
}
//npm spinner react-loader-spinner
