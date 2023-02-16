import * as S from "@/pages/Card/styles";
import "@toast-ui/editor/dist/toastui-editor.css";
import CardHeader from "@/pages/Card/Header";
import CardContent from "@/pages/Card/Content";
import CardSidebar from "@/pages/Card/Sidebar";

const CardModal = () => (
    <S.CardWrapper>
        <CardHeader />
        <CardContent />
        <CardSidebar />
    </S.CardWrapper>
);

export default CardModal;
