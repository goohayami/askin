import Link from "next/link";

export default function Nav() {
  return (
    <>
      <ul className="nav">
        <li className="nav li">
          <Link className="nav link" href="/">
            石橋阪大前（阪急宝塚線）
          </Link>
        </li>
        <li className="nav li">
          <Link className="nav link" href="/toneyama">
            刀根山（阪大正門）
          </Link>
        </li>
      </ul>
    </>
  );
}
