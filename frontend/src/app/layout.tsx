import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Straightforward",
  description: "Fashion customize just for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <div>
              {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}



// import {
//   QueryClient,
//   HydrationBoundary,
//   dehydrate,
  
// } from "@tanstack/react-query"

// export default function Home() {
//   const queryClient = new QueryClient()


//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>

//     <main>
      
//     </main>
//     </HydrationBoundary>
//   );
// }

