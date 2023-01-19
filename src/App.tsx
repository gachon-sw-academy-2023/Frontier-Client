import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { worker } from "@/tests/mocks/browser";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import SignUp from "./pages/SignUp";

if (import.meta.env.MODE === "development") {
    worker.start();
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const App = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route index element={<Login />} />
                        <Route index element={<Landing />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="home" element={<Home />} />
                        {/* <Route path="/workspace" component={<WorkSpace />}
                        </Route> */}
                    </Routes>
                </QueryClientProvider>
            </RecoilRoot>
        </BrowserRouter>
    );
};

export default App;
