import { FaHeart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const sites = [
  {
    id: 1,
    to: "https://Tap.az/",
    text: 'Tap.az'
  },
  {
    id: 2,
    to: "https://Boss.az/",
    text: 'Boss.az'
  },
  {
    id: 3,
    to: "https://Bina.az/",
    text: 'Bina.az'
  },

]

const nav = [
  {
    id: 1,
    text: "Dəstək: (077) 716-61-31",
    className: "text-black"
  },
  {
    id: 2,
    text: "FAQ",
  },
  {
    id: 3,
    text: "AZ",
  },
  {
    id: 4,
    text: "Seçilmişlər",
    icon: <FaHeart />
  },
  {
    id: 5,
    text: "Giriş",
    icon: <FaCircleUser size={24} />
  }
];
const NavbarTop = () => {
  return (
    <div className="container flex justify-between m-auto max-w-6xl py-2  text-[#8D94AD]">
      <div className="flex gap-5 text-">
        {sites.map((site) => (
          <NavLink key={site.id} to={site.to} target="_blank">{site.text}</NavLink>
        ))}
      </div>
      <div className="flex justify-center gap-5">
        {nav.map((item) => (
          <p key={item.id} className={`flex items-center gap-2 hover:text-red-600 hover:cursor-pointer ${item.className}`} >
            {item.icon && <span>{item.icon}</span>}
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NavbarTop;
