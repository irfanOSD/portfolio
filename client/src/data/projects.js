import cleaningHome from "../assets/projects/cleaning-home.jpeg";
import cleaningAdmin from "../assets/projects/cleaning-admin.jpeg";

export const projects = [
  {
    id: "cleaning-service-app",
    title: "Cleaning Service App",
    type: "Android App",
    description:
      "ক্লিনিং সার্ভিস বুকিংয়ের একটি Android অ্যাপ, যেখানে কাস্টমার সার্ভিস বেছে বুকিং দেয় এবং অ্যাডমিন সব বুকিং পরিচালনা করে।",
    features: [
      "Firebase Authentication: Login, Register ও Forgot Password",
      "সার্ভিস ব্রাউজ করে ডেট, টাইম ও ঠিকানাসহ বুকিং",
      "My Bookings স্ক্রিনে Firestore real-time আপডেট",
      "অ্যাডমিন ড্যাশবোর্ডে লাইভ স্ট্যাটাস কার্ড ও বুকিং ম্যানেজমেন্ট",
      "বুকিংয়ের স্ট্যাটাস বদলালে কাস্টমারের কাছে in-app নোটিফিকেশন",
      "Firestore Security Rules দিয়ে role-based access (Admin/Customer)",
    ],
    tech: ["Kotlin", "Java", "XML", "Firebase Auth", "Firestore"],
    screenshots: [
      { src: cleaningHome, alt: "Cleaning Service App home screen", caption: "Home" },
      { src: cleaningAdmin, alt: "Cleaning Service App admin dashboard", caption: "Admin Dashboard" },
    ],
    links: {
      github: "https://github.com/irfanOSD/CleaningServiceApp",
      demo: null,
    },
  },
];