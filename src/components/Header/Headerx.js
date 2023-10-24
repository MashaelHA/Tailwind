import React from "react";
import CompanyInfo from "./CompanyInfo";
import Button from "../Button";
import ButtonIcon from "../ButtonsIcon";

const Header = ({ color, height, width }) => {
  const HeaderClasses = `flex flex-row-reverse w-${width} h-${height} p-[24px 32px] justify-start items-center rounded-full bg-${color} shadow-xl`;

  return (
    <header className={HeaderClasses}>
      <div className="basis-1/2">
        <CompanyInfo
          imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-logo-3446031-2882300.png"
          color="Primary"
          shade="700"
          rightIcon={true}
          width={11}
          height={11}
          text="جالاكسي مول"
        />
      </div>

      <div className="basis-1/4">
        <Button
          text="تصدير البيانات"
          color="Primary"
          shade="700"
          fontSize="base"
          rightIcon={true}
          iconType="download"
        />
      </div>

      <div className="basis-1/12">
        <ButtonIcon
          color="Primary"
          shade="700"
          bgColor="Natural"
          bgShade="100"
          size="6"
          iconType="bell"
        />
      </div>
      <div className="basis-1/12">
        <ButtonIcon
          color="Primary"
          shade="700"
          bgColor="Natural"
          bgShade="100"
          size="6"
          iconType="languageEN"
        />
      </div>
    </header>
  );
};

export default Header;
