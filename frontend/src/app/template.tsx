import { StateProvider } from "@/provider/State.provider";
import { Header } from "@/components/organisms/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <StateProvider>
      <Header />
      {children}
    </StateProvider>
  );
}
