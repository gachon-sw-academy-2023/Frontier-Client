import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Landing from "@/pages/Landing";

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
                        <Route index element={<Landing />} />
                    </Routes>
                </QueryClientProvider>
            </RecoilRoot>
        </BrowserRouter>
    );
};

export default App;
