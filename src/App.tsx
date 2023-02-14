import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { worker } from "@/mocks/browser";
import Landing from "@/pages/Landing";
import Login from "@/pages//Login";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import Board from "@/pages/Board";
import Workspace from "@/pages/Workspace";
import { ROUTES } from "@/utils/routes";

if (import.meta.env.MODE === "development") {
    worker.start({
        onUnhandledRequest: "bypass",
    });
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const App = () => (
    <BrowserRouter>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path={ROUTES.MAIN} element={<Landing />} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
                    <Route path={ROUTES.HOMEPAGE} element={<Home />} />
                    <Route path={ROUTES.BOARD} element={<Board />} />
                    <Route path={ROUTES.WORKSPACE} element={<Workspace />} />
                </Routes>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </RecoilRoot>
    </BrowserRouter>
);

export default App;
