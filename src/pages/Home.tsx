import { Link } from "react-router-dom";

interface Website {
  name: string,
  link: string
}
interface websiteCardProps {
  website: Website;
}
function Home() {
  const Websites: Website[] = [
    { name: "Fanta", link: "/fanta" },
    { name: "Unleash", link: "/unleash" },
  ]
  return (
    <div className="bg-gray-950 text-gray-100 h-screen w-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold py-4">100 of website</h1>
        <p className="text-gray-500 max-w-md py-4">welcome to 100 of website created this website so that i can polish my frontent skills </p>

        {/* all the website card will shown here s */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Websites.map((website) => (
            <WebsiteCard key={website.name} website={website} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
export function WebsiteCard({ website }: websiteCardProps) {
  return (
    <Link
      to={website.link}
      className="rounded-lg border border-gray-700 bg-gray-900 p-4 transition hover:bg-gray-800 hover:border-amber-500">
      <h2 className="font-semibold">{website.name}</h2>
      {/* <img src="" alt="" /> */}
    </Link>
  )
}