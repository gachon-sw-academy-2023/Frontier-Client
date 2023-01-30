import axios from "axios";
import { useMutation } from "react-query";
import { UserLogin, User } from "@/interfaces/userInterface";

export const API_URL = "/login";

const fetcher = async (user: UserLogin): Promise<User> => {
    const { data } = await axios.post<User>(API_URL, user);

    return data;
};

const useLoginQuery = () => useMutation(fetcher);

export default useLoginQuery;
