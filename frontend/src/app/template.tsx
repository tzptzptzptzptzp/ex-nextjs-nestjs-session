"use client";

import { Provider } from "react-redux";
import { store } from "@/reducks/store";
import { Header } from "@/components/organisms/Header";

import { VerifyToken } from "@/reducks/users/operations";

export default function Template({ children }: { children: React.ReactNode }) {
  const data = VerifyToken();
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
}
