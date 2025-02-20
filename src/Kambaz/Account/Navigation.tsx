import { Link, useLocation } from "react-router-dom";

type LinkType = string;

export default function AccountNavigation() {
    const { pathname } = useLocation();
    const links: LinkType[] = ["Signin", "Signup", "Profile"];

    const isActiveLink = (link: LinkType): boolean => {
        return pathname.includes(link);
    };
    
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link: LinkType) => (
                <Link 
                    key={link}
                    to={`/Kambaz/Account/${link}`}
                    className={`list-group-item border border-0 ${
                        isActiveLink(link) ? "active" : "text-danger"
                    }`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}