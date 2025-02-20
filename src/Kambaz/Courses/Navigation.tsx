import { Link, useLocation, useParams } from "react-router-dom";
import "../styles.css";

interface NavLink {
  name: string;
  isExternal?: boolean;
  url?: string;
}

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  
  const links: NavLink[] = [
    { name: "Home" },
    { name: "Modules" },
    { name: "Piazza", isExternal: true, url: "https://piazza.com/class" },
    { name: "Zoom", isExternal: true, url: "https://northeastern.zoom.us/my/course" },
    { name: "Assignments" },
    { name: "Quizzes" },
    { name: "Grades" },
    { name: "People" }
  ];
  
  const isActiveLink = (link: NavLink): boolean => {
    const currentPath = pathname.split("/")[4];
    return currentPath === link.name;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        link.isExternal ? (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item border border-0 text-danger"
          >
            {link.name}
          </a>
        ) : (
          <Link
            key={link.name}
            to={`/Kambaz/Courses/${cid}/${link.name}`}
            className={`list-group-item border border-0 ${
              isActiveLink(link) ? "active" : "text-danger"
            }`}
          >
            {link.name}
          </Link>
        )
      ))}
    </div>
  );
}