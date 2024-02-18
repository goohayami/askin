import Image from "next/image";
import localImage from "../../public/mono.jpg";

export default function Monorail() {
  return (
    <>
      <div className="main">
        <h1>
          <a href="https://www.osaka-monorail.co.jp/station/">大阪モノレール</a>
        </h1>
        <div className="img-container">
          <Image src={localImage} height={500} alt="大阪モノレール路線図" />
        </div>
      </div>
    </>
  );
}
