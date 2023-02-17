import Link from "next/link";

const BreadcrumbItem = ({ children, href, isCurrent, ...props }) => {
  return (
    <li {...props}>
      <Link href={href} passHref className={`${isCurrent && `text-basic-green font-semibold`} flex items-center gap-1 hover:underline`} aria-current={isCurrent ? "page" : "false"}>
        {children}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;