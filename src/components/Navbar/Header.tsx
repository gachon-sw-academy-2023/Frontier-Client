import { SetStateAction, useState } from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import S from "./styles";

const Header = () => {
    const [searching, setSearching] = useState("");

    const searchChange = (e: { target: { value: SetStateAction<string> } }) => {
        setSearching(e.target.value);
        console.log(searching);
    };

    return (
        <S.nav className="navbar">
            <S.ul>
                <S.liitem>
                    <FiMenu className="menu" />
                </S.liitem>
                <S.liitem>
                    <div className="nav_logo">Logo</div> {/* Logo space */}
                </S.liitem>
                <S.liitem>
                    <S.link to="/">workspace</S.link>
                </S.liitem>
                <S.liitem>
                    <S.link to="/">recent</S.link>
                </S.liitem>
                <S.liitem>
                    <S.link to="/">starred</S.link>
                </S.liitem>
                <S.liitem>
                    <S.create type="button" className="head_create">
                        Create
                    </S.create>
                </S.liitem>
            </S.ul>
            <S.ul className="nav_function">
                <S.lifunc>
                    <input id="search" name="search" placeholder="Search" onChange={searchChange} />
                </S.lifunc>
                <S.lifunc>
                    <FiBell className="alarm" />
                </S.lifunc>
                <S.lifunc>
                    <button type="button" className="head_user">
                        {/* <img src={user_image} alt="user_image" /> */}
                        user_image
                    </button>
                </S.lifunc>
            </S.ul>
        </S.nav>
    );
};

export default Header;
