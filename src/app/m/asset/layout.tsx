import { AuthenticationLayout } from "@/components/layouts/AuthenticationLayout";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthenticationLayout>{children}</AuthenticationLayout>
    </>
  );
}
