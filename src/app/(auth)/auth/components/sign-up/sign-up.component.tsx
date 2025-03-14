import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import BackButtonComponent from "@/components/back-button/back-button.component";
import InputComponent from "@/components/input/input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";
import ButtonComponent from "@/components/button/button.component";

import HugeiconsUserAccount from "@/icons/HugeiconsUserAccount";
import HugeiconsUser from "@/icons/HugeiconsUser";
import HugeiconsMail01 from "@/icons/HugeiconsMail01";

import signUpPic from "@/assets/images/venetain-mask2.webp";

import styles from "../../styles/auth.module.css";

export default function SignUpComponent(): ReactElement {
  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <BackButtonComponent
          backUrl={"/"}
          label="بازگشت به خانه"
          className={styles.back}
        />
        <div className={styles.writings}>
          <div className={styles.heading}>
            <h1>ثبت‌نام</h1>
            <p>اطلاعات خواسته شده را وارد کنید</p>
          </div>
          <form className={styles.form}>
            <InputComponent
              type="text"
              name="name"
              placeholder="نام و نام‌خانوادگی"
              prefixIcon={<HugeiconsUser />}
              className={styles.input}
            />
            <InputComponent
              type="text"
              name="username"
              placeholder="نام کاربری"
              prefixIcon={<HugeiconsUserAccount />}
              className={styles.input}
            />
            <InputComponent
              type="email"
              name="email"
              placeholder="ایمیل"
              prefixIcon={<HugeiconsMail01 />}
              className={styles.input}
            />
            <PasswordInputComponent
              name="password"
              placeholder="رمز عبور"
              autoComplete="new-password"
              className={styles.input}
            />
            <ButtonComponent className={styles.button}>ثبت‌نام</ButtonComponent>
          </form>
          <div className={styles.help}>
            قبلا ثبت‌نام کرده‌اید؟ <Link href={"/auth/sign-in"}>وارد شوید</Link>
          </div>
        </div>
      </div>
      <div className={styles.visuals}>
        <Image src={signUpPic} alt="" priority />
      </div>
    </div>
  );
}
