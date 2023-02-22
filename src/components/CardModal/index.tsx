import * as S from "@/components/CardModal/styles";
import CardHeader from "@/components/CardModal/Header";
import CardContent from "@/components/CardModal/Content";
import CardSidebar from "@/components/CardModal/Sidebar";

const CardModal = () => (
    <S.CardWrapper>
        <CardHeader />
        <CardContent />
        <CardSidebar />
    </S.CardWrapper>
);

export default CardModal;
