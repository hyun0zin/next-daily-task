import Header from "@/components/Header";

import Image from "next/image";
// import RenderingPage from "./(Rendering)/page";
import { useRouter } from "next/router";

// interface HomeProps {
//   pageTitle: string;
//   PageComponent: React.ComponentType<any>;
// }

export default function Home() {
  // const router = useRouter();
  // const { page } = router.query;

  // let pageTitle: string, PageComponent: React.ComponentType<any>;
  // switch (page) {
  //   case "SSG":
  //     pageTitle: "SSG 페이지 렌더링입니다.";
  //     PageComponent: () => import("@/components/rendering/SSG");
  //     break;
  //   case "ISR":
  //     pageTitle: "ISR 페이지 렌더링입니다.";
  //     PageComponent: () => import("@/components/rendering/ISR");
  //     break;
  //   case "SSR":
  //     pageTitle: "SSR 페이지 렌더링입니다.";
  //     PageComponent: () => import("@/components/rendering/SSR");
  //     break;
  //   case "CSR":
  //     pageTitle: "CSR 페이지 렌더링입니다.";
  //     PageComponent: () => import("@/components/rendering/CSR");
  //     break;
  //   default:
  //     pageTitle: "Page Not Found";
  //     PageComponent: () => <div>Page Not Found</div>;
  // }

  return (
    <div className="m-4">
      <p>원하는 렌더링 방식 버튼을 눌러주세요.</p>
      {/* <RenderingPage pageTitle={pageTitle} PageComponent={PageComponent} /> */}
    </div>
  );
}
