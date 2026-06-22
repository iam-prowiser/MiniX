import { NavLink } from "react-router-dom";
import sidebarItems from "../../../data/sidebarItems";

export default function Sidebar() {
    const renderedItems = sidebarItems.map((item)=>{
        return(
            <NavLink key={item.id} to={item.path}>
                    <item.icon />,
                    <span>{item.label}</span>
            </NavLink>
        )
    })

    return (
        <div>
            {renderedItems}
        </div>
    )
}