import { SetStateAction, useState } from "react";
import Logo from "@/assets/images/Frontier-Logo.png";
import { ROUTES } from "@/utils/routes";
import user_img from "@/assets/images/user-img.png";
import Head from "./styles";

const Navbar = () => {
    // 추후 functinon 관련 api 추가
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [content, setContent] = useState("");

    const searchContent = (e: { target: { value: SetStateAction<string> } }) => {
        setContent(e.target.value);
    };

    return (
        <Head.HeadNav>
            <Head.HeadUl>
                <Head.Image src={Logo} alt="" />
                <Head.HeadLiitem>
                    <Head.HeadLiimg src={user_img} alt="user_img" />
                </Head.HeadLiitem>
                <Head.HeadLiitem>
                    <Head.HeadLink to={ROUTES.HOMEPAGE}>workspace</Head.HeadLink>
                </Head.HeadLiitem>
                <Head.HeadLiitem>
                    <Head.HeadCreate type="button" className="head_create">
                        Create
                    </Head.HeadCreate>
                </Head.HeadLiitem>
            </Head.HeadUl>
            <Head.HeadUl>
                <Head.HeadLifunc>
                    <input
                        id="search"
                        name="search"
                        placeholder="Search"
                        onChange={searchContent}
                    />
                </Head.HeadLifunc>
            </Head.HeadUl>
        </Head.HeadNav>
    );
};

export default Navbar;
