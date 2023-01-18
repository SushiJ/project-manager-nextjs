import Card from "./Card";
import SidebarLink from "./SidebarLink";

const links = [
    {
        label: "home",
        icon: "Grid",
        link: "/home",
    },
    { label: "Calendar", icon: "Calendar", link: "/calender" },
    { label: "Profile", icon: "Profile", link: "/profile" },
    {
        label: "Settings",
        icon: "Setting",
        link: "/settings",
    },
];

const Sidebar = () => {
    return (
        <Card className="h-full w-40 flex items-center justify-between flex-wrap">
            {links.map((link, idx) => (
                <SidebarLink link={link} key={idx} />
            ))}
        </Card>
    );
};

export default Sidebar;
