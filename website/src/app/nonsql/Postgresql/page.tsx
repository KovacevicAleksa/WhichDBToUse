import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhichDBToUse",
  description: "Main page",
  icons: {
    icon: 'https://img.icons8.com/?size=100&id=1476&format=png&color=000000',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <p className="text-lg text-center max-w-md">
        Test
      </p>
    </div>
  );
}
