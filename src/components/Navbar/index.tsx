import { useState } from "react";
import Logo from "@/assets/images/Frontier-Logo.png";
import user_img from "@/assets/images/user-img.png";
import { ROUTES } from "@/utils/routes";
import Head from "./styles";

const Navbar = () => {
    // 추후 functinon 관련 api 추가
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [content, setContent] = useState("");

    return (
        <Head.HeadNav>
            <Head.HeadUl>
                <Head.HeadLink to={ROUTES.HOMEPAGE}>
                    <Head.Image src={Logo} alt="" />
                </Head.HeadLink>
                <Head.HeadLiitem>
                    <Head.DropDownButton>
                        <Head.HeadLink to={ROUTES.HOMEPAGE}>Workspaces</Head.HeadLink>
                    </Head.DropDownButton>
                    <Head.DropDownContent>
                        Workspaces
                        <Head.DropDownBox>Workspace1</Head.DropDownBox>
                        <Head.DropDownBox>Workspace2</Head.DropDownBox>
                        <Head.DropDownBox>Workspace3</Head.DropDownBox>
                    </Head.DropDownContent>
                </Head.HeadLiitem>
                <Head.HeadLiitem>
                    <Head.DropDownButton>
                        <Head.HeadLink to={ROUTES.HOMEPAGE}>Boards</Head.HeadLink>
                    </Head.DropDownButton>
                    <Head.DropDownContent>
                        Boards
                        <Head.DropDownBox>Board1</Head.DropDownBox>
                        <Head.DropDownBox>Board2</Head.DropDownBox>
                        <Head.DropDownBox>Board3</Head.DropDownBox>
                    </Head.DropDownContent>
                </Head.HeadLiitem>
                <Head.HeadCreate type="button" className="head_create">
                    Create
                </Head.HeadCreate>
            </Head.HeadUl>
            <Head.HeadUl>
                <Head.HeadUserInfo>
                    <Head.HeadLiimg src={user_img} alt="user_img" />
                    <Head.HeadUserName>user_name</Head.HeadUserName>
                    {/* username will get from params */}
                </Head.HeadUserInfo>
            </Head.HeadUl>
        </Head.HeadNav>
    );
};

export default Navbar;
