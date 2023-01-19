import { SetStateAction, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import Logo from "@/assets/images/Trello-Logo.png";
import H from "./styles";

const Navbar = () => {
    const [searching, setSearching] = useState("");

    const searchChange = (e: { target: { value: SetStateAction<string> } }) => {
        setSearching(e.target.value);
        console.log(searching);
    };

    return (
        <H.HeadNav className="navbar">
            <H.HeadUl>
                <H.HeadLiitem>
                    <img src={Logo} alt="" className="h-10" />
                    {/* Logo space */}
                </H.HeadLiitem>
                <H.HeadLiitem>
                    <H.HeadLink to="/">workspace</H.HeadLink>
                </H.HeadLiitem>
                <H.HeadLiitem>
                    <H.HeadLink to="/">recent</H.HeadLink>
                </H.HeadLiitem>
                <H.HeadLiitem>
                    <H.HeadLink to="/">starred</H.HeadLink>
                </H.HeadLiitem>
                <H.HeadLiitem>
                    <H.HeadCreate type="button" className="head_create">
                        Create
                    </H.HeadCreate>
                </H.HeadLiitem>
            </H.HeadUl>
            <H.HeadUl className="nav_function">
                <H.HeadLifunc>
                    <input id="search" name="search" placeholder="Search" onChange={searchChange} />
                </H.HeadLifunc>
                <H.HeadLifunc>
                    <RxDashboard className="alarm" />
                </H.HeadLifunc>
                <H.HeadLifunc>
                    <button type="button" className="head_user">
                        {/* <img src={user_image} alt="user_image" /> */}
                        user_image
                    </button>
                </H.HeadLifunc>
            </H.HeadUl>
        </H.HeadNav>
    );
};

export default Navbar;
