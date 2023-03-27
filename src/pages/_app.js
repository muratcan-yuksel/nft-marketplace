import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <p className="mr-6 text-pink-500">Home</p>
          </Link>
          <Link href="/createItem">
            <p className="mr-6 text-pink-500">Sell Digital Asset</p>
          </Link>
          <Link href="/myAssets">
            <p className="mr-6 text-pink-500">My Digital Assets</p>
          </Link>
          <Link href="/dashboard">
            <p className="mr-6 text-pink-500">Creator Dashboard</p>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
