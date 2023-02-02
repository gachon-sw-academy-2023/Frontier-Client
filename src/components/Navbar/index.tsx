import { SetStateAction, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import Logo from "@/assets/images/Trello-Logo.png";
import H from "./styles";

const Navbar = () => {
    // 추후 functinon 관련 api 추가
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [content, setContent] = useState("");

    const searchContent = (e: { target: { value: SetStateAction<string> } }) => {
        setContent(e.target.value);
    };

    return (
        <H.HeadNav className="navbar">
            <H.HeadUl>
                <H.Image src={Logo} alt="" />
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
                    <input
                        id="search"
                        name="search"
                        placeholder="Search"
                        onChange={searchContent}
                    />
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
