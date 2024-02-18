import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="main">
        <h1>阪大アパートリスト</h1>
      </div>
      <ul className="apart-link">
        <li>
          <a className="shop-name">
            アパマンショップ<span>(56000円～)</span>
          </a>
          <br />
          <Link
            className="a-link"
            href="https://www.apamanshop.com/osaka/203/b52019801441128/?media_nm=campus"
          >
            レオパレス待兼キャンパス/大阪府豊中市/大阪モノレール柴原阪大前駅
          </Link>
        </li>
      </ul>
    </>
  );
}
