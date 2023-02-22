import * as S from "@/pages/Landing/Feature/Feature.styles";
import { MdWorkspaces } from "react-icons/md";
import { CiViewBoard } from "react-icons/ci";
import { BsCardChecklist } from "react-icons/bs";
import { TbDragDrop } from "react-icons/tb";

const Feature = () => (
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
                    <S.FeatureListInner>
                        <S.FeatureItemWrapper>
                            <S.FeatureItemIcon>
                                <MdWorkspaces color="orange" />
                            </S.FeatureItemIcon>
                            <S.FeatureItemTitle>Workspace</S.FeatureItemTitle>
                            <S.FeatureItemSubTitle>
                                Create, Organize, and Delete Workspaces with Ease
                            </S.FeatureItemSubTitle>
                        </S.FeatureItemWrapper>
                    </S.FeatureListInner>
                    <S.FeatureListInner>
                        <S.FeatureItemWrapper>
                            <S.FeatureItemIcon>
                                <CiViewBoard color="red" />
                            </S.FeatureItemIcon>
                            <S.FeatureItemTitle>Board</S.FeatureItemTitle>
                            <S.FeatureItemSubTitle>
                                Create, Organize, and Delete Boards with List and Card
                            </S.FeatureItemSubTitle>
                        </S.FeatureItemWrapper>
                    </S.FeatureListInner>
                    <S.FeatureListInner>
                        <S.FeatureItemWrapper>
                            <S.FeatureItemIcon>
                                <BsCardChecklist color="purple" />
                            </S.FeatureItemIcon>
                            <S.FeatureItemTitle>Card</S.FeatureItemTitle>
                            <S.FeatureItemSubTitle>
                                Maximize Productivity with User Assignments, Checklists, Labels, and
                                More
                            </S.FeatureItemSubTitle>
                        </S.FeatureItemWrapper>
                    </S.FeatureListInner>
                    <S.FeatureListInner>
                        <S.FeatureItemWrapper>
                            <S.FeatureItemIcon>
                                <TbDragDrop color="blue" />
                            </S.FeatureItemIcon>
                            <S.FeatureItemTitle>Drag and Drop</S.FeatureItemTitle>
                            <S.FeatureItemSubTitle>
                                Navigate Your Lists and Cards with Ease by Dragging and Dropping
                                Items to the Right Place
                            </S.FeatureItemSubTitle>
                        </S.FeatureItemWrapper>
                    </S.FeatureListInner>
                </S.FeatureList>
            </S.FeatureInner>
        </S.FeatureOverlay>
    </S.FeatureWrapper>
);

export default Feature;
