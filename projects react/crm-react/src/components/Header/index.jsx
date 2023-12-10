import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="project-nav">
            <div className="project-nav__links-wrapper">
                <Link to="/">Форма добавления заявок</Link>
                <Link to="/tab">Таблица с заявками</Link>
                <Link to="/edit">Редактирование заявки</Link>
            </div>
        </nav>
    );
}

export default Header;