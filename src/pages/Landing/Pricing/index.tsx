import * as S from "@/pages/Landing/Pricing/Pricing.styles";
import { MdOutlineCropFree } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { IoMdBusiness } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
    const itemList = [
        {
            icon: <MdOutlineCropFree color="red" />,
            price: "Free",
            title: "Starter",
            subTitle: "Free to use",
            content: [
                {
                    text: "Up to 1 workspace",
                },
                {
                    text: "Up to 1 board",
                },
                {
                    text: "Up to 3 cards",
                },
                {
                    text: "Up to 5 users",
                },
            ],
        },
        {
            icon: <RiTeamLine color="orange" />,
            price: "$3/mo",
            title: "Pro",
            subTitle: "For small team",
            content: [
                {
                    text: "Up to 5 workspaces",
                },
                {
                    text: "Up to 15 boards",
                },
                {
                    text: "Up to 500 cards",
                },
                {
                    text: "Up to 20 users",
                },
            ],
        },
        {
            icon: <IoMdBusiness color="green" />,
            price: "$5/mo",
            title: "Enterprise",
            subTitle: "For Enterprise",
            content: [
                {
                    text: "Unlimited features",
                },
            ],
        },
    ];
    return (
        <S.PricingWrapper id="pricing">
            <S.PricingOverlay>
                <S.PricingInnerWrapper>
                    <S.PricingHeader>
                        <S.HeaderTitle>Pricing</S.HeaderTitle>
                        <S.HeaderSubTitle>
                            Choose the pricing plan that works best for you and your team
                        </S.HeaderSubTitle>
                    </S.PricingHeader>
                    <S.TableWrapper>
                        {itemList.map((v) => (
                            <S.TableInnerWrapper key={v.price}>
                                <S.TableItemWrapper>
                                    <S.TableHeader>
                                        {v.icon}
                                        <S.TableHeaderPrice>{v.price}</S.TableHeaderPrice>
                                    </S.TableHeader>
                                    <S.TableHeaderDescription>
                                        <S.TableHeaderTitle>{v.title}</S.TableHeaderTitle>
                                        <S.TableHeaderSubTitle>{v.subTitle}</S.TableHeaderSubTitle>
                                    </S.TableHeaderDescription>

                                    {v.content.map((el) => (
                                        <S.TableContent key={el.text}>
                                            <S.TableContentInner>
                                                <S.Check>
                                                    <AiOutlineCheck color="green" />
                                                </S.Check>
                                            </S.TableContentInner>
                                            <S.ContentName>{el.text}</S.ContentName>
                                        </S.TableContent>
                                    ))}
                                </S.TableItemWrapper>
                            </S.TableInnerWrapper>
                        ))}
                    </S.TableWrapper>
                </S.PricingInnerWrapper>
            </S.PricingOverlay>
        </S.PricingWrapper>
    );
};

export default Pricing;
