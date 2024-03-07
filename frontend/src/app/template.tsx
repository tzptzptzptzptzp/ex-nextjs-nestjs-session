import { StateProvider } from "@/provider/State.provider";
import { Header } from "@/components/organisms/Header";
import { AuthProvider } from "@/provider/Auth.provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <StateProvider>
      <AuthProvider>
        <Header />
        {children}
      </AuthProvider>
    </StateProvider>
  );
}
