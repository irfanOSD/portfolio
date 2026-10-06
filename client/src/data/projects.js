import cleaningHome from "../assets/projects/cleaning-home.jpeg";
import cleaningAdmin from "../assets/projects/cleaning-admin.jpeg";

export const projects = [
  {
    id: "cleaning-service-app",
    title: "Cleaning Service App",
    type: "Android App",
    description:
  "An Android cleaning service booking application where customers can select a service and make bookings, while administrators manage all bookings.",

features: [
  "Firebase Authentication: Login, Registration, and Forgot Password",
  "Browse cleaning services and make bookings with date, time, and address",
  "My Bookings screen with real-time Firestore updates",
  "Admin dashboard with live status cards and booking management",
  "In-app notifications for customers when booking status changes",
  "Role-based access control (Admin/Customer) using Firestore Security Rules",
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