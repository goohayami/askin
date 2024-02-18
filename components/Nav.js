import Link from "next/link";

export default function Nav() {
  return (
    <>
      <ul className="nav">
        <li className="nav li">
          <Link className="nav link" href="/">
            石橋阪大前方面
          </Link>
        </li>
        <li className="nav li">
          <Link className="nav link" href="/toneyama">
            阪大正門方面
          </Link>
        </li>
        <li className="nav li">
          <Link className="nav link" href="/monorail">
            大阪モノレール
          </Link>
        </li>
      </ul>
    </>
  );
}
