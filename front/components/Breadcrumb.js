import { Children, Fragment } from "react";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>&gt;</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className="text-sm font-normal text-gray-500 tracking-tighter" aria-label="breadcrumb">
      <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default Breadcrumb;