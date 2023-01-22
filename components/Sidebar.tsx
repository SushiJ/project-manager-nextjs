import Card from "./Card";
import SidebarLink from "./SidebarLink";

const links = [
  {
    label: "home",
    icon: "Grid",
    link: "/home",
  },
  { label: "Calendar", icon: "Calendar", link: "/calender" },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full mx-4 w-40 flex items-center justify-between flex-wrap">
      {links.map((link) => (
        <SidebarLink link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
