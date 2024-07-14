import { memo, ReactElement } from "react";

import cls from "./MainLayout.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, header, footer } = props;

  return (
    <div>
      <div className={classNames(cls.MainLayout, {}, [className])}>
        <div className={cls.header}>{header}</div>

        <div className={cls.content}>{content}</div>

        <div className={cls.footer}>{footer}</div>
      </div>
    </div>
  );
});

export default MainLayout;
