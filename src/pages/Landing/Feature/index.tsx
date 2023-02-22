import * as S from "@/pages/Landing/Feature/Feature.styles";
import { MdWorkspaces } from "react-icons/md";
import { CiViewBoard } from "react-icons/ci";
import { BsCardChecklist } from "react-icons/bs";
import { TbDragDrop } from "react-icons/tb";

const Feature = () => {
    const itemList = [
        {
            icon: <MdWorkspaces color="orange" />,
            title: "Workspace",
            subTitle: "Create, Organize, and Delete Workspaces with Ease",
        },
        {
            icon: <CiViewBoard color="red" />,
            title: "Board",
            subTitle: "Create, Organize, and Delete Boards with List and Card",
        },
        {
            icon: <BsCardChecklist color="purple" />,
            title: "Card",
            subTitle: "Maximize Productivity with User Assignments, Checklists, Labels, and More",
        },
        {
            icon: <TbDragDrop color="blue" />,
            title: "Drag and Drop",
            subTitle:
                "Navigate Your Lists and Cards with Ease by Dragging and Dropping Items to the Right Place",
        },
    ];

    return (
        <S.FeatureWrapper id="features">
            <S.FeatureOverlay>
                <S.FeatureInner>
                    <S.FeatureHeader>
                        <S.HeaderTitle>Our Features</S.HeaderTitle>
                        <S.HeaderSubTitle>
                            Plan, Track, and Monitor Your Projects with Ease
                        </S.HeaderSubTitle>
                    </S.FeatureHeader>
                    <S.FeatureList>
                        {itemList.map((v) => (
                            <S.FeatureListInner key={v.title}>
                                <S.FeatureItemWrapper>
                                    <S.FeatureItemIcon>{v.icon}</S.FeatureItemIcon>
                                    <S.FeatureItemTitle>{v.title}</S.FeatureItemTitle>
                                    <S.FeatureItemSubTitle>{v.subTitle}</S.FeatureItemSubTitle>
                                </S.FeatureItemWrapper>
                            </S.FeatureListInner>
                        ))}
                    </S.FeatureList>
                </S.FeatureInner>
            </S.FeatureOverlay>
        </S.FeatureWrapper>
    );
};

export default Feature;
