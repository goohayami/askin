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
            アパマンショップ石橋店<span>(53000円～)</span>
          </a>
          <br />
          <Link
            className="a-link"
            href="http://www.handai-chintai.com/bukken/136.html"
          >
            シャルム石橋(最上階・独立角部屋！！インターネット無料！！)
          </Link>
        </li>
        <li>
          <a className="shop-name">
            アパマンショップ石橋店<span>(71000円～)</span>
          </a>
          <br />
          <Link
            className="a-link"
            href="http://www.handai-chintai.com/bukken/902.html"
          >
            White Well Comfort(CATV / インターネット無料)
          </Link>
        </li>
        <li>
          <a className="shop-name">
            アパマンショップ石橋店<span>(46000円～)</span>
          </a>
          <br />
          <Link
            className="a-link"
            href="http://www.handai-chintai.com/bukken/593.html"
          >
            清風荘メゾンブライト(オートロック付の鉄筋コンクリートマンション)
          </Link>
        </li>
      </ul>
    </>
  );
}
