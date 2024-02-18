import Link from "next/link";

export default function Toneyama() {
  return (
    <>
      <div className="main">
        <h1>阪大アパートリスト</h1>
      </div>
      <ul className="apart-link">
        <li>
          <a className="shop-name">
            アパマンショップ<span>(55000円～)</span>
          </a>
          <br />
          <Link
            className="a-link"
            href="https://www.apamanshop.com/osaka/203/b52021040500615/20231028022670/?media_nm=campus"
          >
            Ｔ・ＳＡＮＳＡＲＡ/大阪府豊中市/大阪モノレール柴原阪大前駅/1K/24㎡
          </Link>
        </li>
        <li>
          <a className="shop-name">
            アパマンショップ<span>(52,000円～)</span>
          </a>
          <br />
          <Link
            className="a-link"
            href="https://www.apamanshop.com/osaka/203/b52019801372617/?media_nm=campus"
          >
            レオパレスグリーン/大阪府豊中市/大阪モノレール柴原阪大前駅
          </Link>
        </li>
        <li>
          <a className="shop-name">
            UR賃貸住宅 <span>(78,400円～146,000円)</span>
          </a>
          <br />
          <Link
            className="a-link"
            href="https://www.ur-net.go.jp/chintai/kansai/osaka/80_5090.html"
          >
            シティコート千里園
          </Link>
        </li>
      </ul>
    </>
  );
}
