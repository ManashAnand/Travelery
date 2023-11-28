"use client";

import { Provider } from "react-redux";
import store from "./store";

export function NextProvider({children}){
    return <Provider store={store}>{children}</Provider>
}