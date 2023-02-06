import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { worker } from "@/tests/mocks/browser";
import Landing from "@/pages/Landing";
import Login from "@/pages//Login";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import Board from "@/pages/Board";

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
                    <Route index element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/homepage" element={<Home />} />
                    <Route path="/board" element={<Board />} />
                </Routes>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </RecoilRoot>
    </BrowserRouter>
);

export default App;
