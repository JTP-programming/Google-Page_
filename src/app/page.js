import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src="/logo.png"
          alt="Google Logo"
          width={272}
          height={92}
          className="Google_Logo"
        ></Image>
      </div>

      <input type="text" placeholder="  🔍  Search Google or Type URL"></input>
      <div>
        <button className="Google_Search">Google Search</button>
        <button className="Google_Lucky">I'm Feeling Lucky</button>
      </div>
      <div></div>
    </div>
  );
}
