"use client";
import { BarLoader } from "react-spinners";

// cssOverride: tailwind css가 support되지 않는 component에 css 객체를 넘겨줄 수 있음
export default function LoadingBar() {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: "100%" }} />
    </div>
  );
}
