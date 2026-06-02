import ProfileForm from "@/components/forms/ProfileForm";
import { verifyToken } from "@/lib/auth/utils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "QubimallShop is the user-friendly Next.js eCommerce template perfect for launching your online store. With its clean design and customizable options, QubimallShop makes selling online a breeze. Start building your dream store today and boost your online presence effortlessly!",
};

const ProfilePage = async () => {
  // Get the token from cookies
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  // If no token, redirect to login
  if (!token) {
    redirect("/login?redirect=/profile");
  }

  // Verify the token
  const decoded = verifyToken(token);
  if (!decoded) {
    redirect("/login?redirect=/profile");
  }

  return (
    <section className="profile-page">
      <ProfileForm />
    </section>
  );
};

export default ProfilePage;
