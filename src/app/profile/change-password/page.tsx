import { Metadata } from "next";
import ChangePassword from "./ChangePass";

export const metadata: Metadata = {
  title: "Change Password",
  description:
    "QubimallShop is the user-friendly Next.js eCommerce template perfect for launching your online store. With its clean design and customizable options, QubimallShop makes selling online a breeze. Start building your dream store today and boost your online presence effortlessly!",
};

const ChangePassPage = () => {
  return <ChangePassword />;
};

export default ChangePassPage;
