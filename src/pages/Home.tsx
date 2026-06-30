import { Link } from "react-router-dom";
import finta from '../assets/webs/finta.png'
import cobalt from '../assets/webs/cobalt.png'
import lp from '../assets/webs/lp.png'

interface Website {
  name: string;
  link: string;
  img: string
}
interface websiteCardProps {
  website: Website;
}
function Home() {
  const Websites: Website[] = [
    { name: "Fanta", link: "/fanta", img: finta },
    { name: "Cobalt", link: "/cobalt", img: cobalt },
    { name: "Lp", link: "/lp", img: lp },
  ];
  return (
    <div className="h-screen w-full bg-gray-950 text-gray-100">
      <div className="mx-auto max-w-6xl">
        <h1 className="py-4 text-2xl font-bold">100 of website</h1>
        <p className="max-w-md py-4 text-gray-500">
          welcome to 100 of website created this website so that i can polish my
          frontent skills{" "}
        </p>

        {/* all the website card will shown here s */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Websites.map((website) => (
            <WebsiteCard key={website.name} website={website} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
export function WebsiteCard({ website }: websiteCardProps) {
  return (
    <Link
      to={website.link}
      className="rounded-lg border border-gray-700 bg-gray-900 p-4 transition hover:border-amber-500 hover:bg-gray-800"
    >
      <h2 className="font-semibold">{website.name}</h2>
      <img src={website.img} alt={website.name} />
    </Link>
  );
}
