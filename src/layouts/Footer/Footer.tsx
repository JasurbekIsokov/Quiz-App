import React from "react";

import cls from "./Footer.module.scss";
import { classNames } from "../../helpers/classNames/classNames";

import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Footer = () => {
  return (
    <div
      className={classNames(cls.Footer)}
      style={{
        backgroundColor: false ? "#f9c6c6" : false ? "#c6ecdb" : "",
        borderTop: "2px solid #d0d0d0",
      }}
    >
      <div className={cls.Footer__container}>
        <div className={classNames(cls.Footer__ansverAction)}>
          {false && (
            <div className={cls.correctAns}>
              <div>
                <FaCheck style={{ fontSize: "32px", color: "#1a7a5e" }} />
              </div>

              <h2>Ofarin, siz topdingiz!</h2>
            </div>
          )}

          {false && (
            <div className={cls.mistakeAns}>
              <div className={cls.mistakeAns__sircle}>
                <IoClose style={{ fontSize: "36px", color: "#c62a2f" }} />
              </div>

              <div>
                <h2>Javob noto'g'ri!</h2>
                <p>Yana urinib ko'ring.</p>
              </div>
            </div>
          )}
        </div>

        <div className={cls.Footer__bnts}>
          {false && (
            <div className={classNames(cls.Footer__prevQuiz)}>
              Avvalgi savol
            </div>
          )}

          {false && (
            <div className={classNames(cls.Footer__reaction)}>
              Qayta urinish
            </div>
          )}

          {false && (
            <div className={classNames(cls.Footer__nextQuiz)}>
              Keyingi savol
            </div>
          )}

          <div
            className={classNames(cls.Footer__checkAns, {
              [cls.Footer__checkAnsDisabled]: true,
            })}
          >
            Javobni tekshirish
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
