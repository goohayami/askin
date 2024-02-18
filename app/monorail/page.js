import Image from "next/image";
import localImage from "../../public/mono.jpg";

export default function Monorail() {
  return (
    <>
      <div className="main">
        <h3>
          <a href="https://www.osaka-monorail.co.jp/station/">大阪モノレール</a>
        </h3>
        <div className="img-container">
          <Image
            src={localImage}
            sizes="(max-width: 768px) 100vw, 50vw"
            width={600}
            alt="大阪モノレール路線図"
          />
        </div>
      </div>
    </>
  );
}
