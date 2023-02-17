import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BreadcrumbItem, Breadcrumb } from ".";
import { VscHome } from 'react-icons/vsc';
import { itim } from '../constants/fonts';

const InternalBanner = ({ title }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();


  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);


  return (
    <div className="bg-banner-pattern border-b-2 border-gray-200">
      <div className="max-w-[1100px] m-auto px-5 py-14">
        <h2 className={`${itim.className} text-5xl sm:text-7xl tracking-tighter mb-5`}>{title}</h2>

        <Breadcrumb>
          <BreadcrumbItem isCurrent={router.pathname === "/"} href="/"><VscHome/>Home</BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb) => (
              <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href} isCurrent={breadcrumb.isCurrent}>
                {breadcrumb.label}
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      </div>
    </div>
  )
}

export default InternalBanner