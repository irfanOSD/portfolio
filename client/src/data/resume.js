// PDF রাখার জায়গা: client/public/resume.pdf
export const resumeFile = "/resume.pdf";
export const resumeDownloadName = "Irfan-Alam-Sourav-Resume.pdf";

export const resumeData = {
  name: "Irfan Alam Sourav",
  summary:
    "Computer Science & Engineering student at Premier University Chittagong, in the final stage of the B.Sc. degree. Completed a Software Development internship at Tori IT focused on native Android application development, and currently working on web and backend development with Node.js and MySQL.",

  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Premier University Chittagong",
    status: "Currently in the final stage of my CSE degree",
    secondary: [
      { label: "HSC", year: "2021", institution: "Sir Ashutosh Government College" },
      { label: "SSC", year: "2019", institution: "Kazem Ali School & College" },
    ],
  },

  skills: [
    "C/C++", "Java", "Kotlin", "Python", "SQL", "XML",
    "Android Studio", "Node.js", "MySQL", "Git", "GitHub", "VS Code", "Firebase",
  ],

  areas: [
    "Native Android Development",
    "Web Development",
    "Backend Development",
    "Database-driven Applications",
    "UI Development",
  ],

  experience: [
    {
      role: "Software Development Intern",
      company: "Tori IT",
      period: "Recently completed",
      points: [
        "Internship focused on native Android application development.",
        "Worked on the CleaningServiceApp project.",
        "Gained practical experience in Android application development and real-world software development workflow.",
        "Worked with Kotlin, Java, XML, Android Studio, Firebase, Git, and GitHub.",
        "Successfully completed the internship and received an internship certificate from Tori IT.",
      ],
    },
  ],

  projects: [
    {
      name: "CleaningServiceApp",
      status: null,
      description:
        "Native Android cleaning service booking application developed during my internship at Tori IT. Features include service browsing, booking, booking management, user profile functionality, and administrative functionality.",
      tags: ["Kotlin", "Java", "XML", "Firebase", "Android Studio", "Git & GitHub"],
    },
    {
      name: "Web Development Project",
      status: "In progress",
      description: "Currently working on a web project.",
      tags: ["Node.js", "MySQL", "Git", "VS Code"],
    },
    {
      name: "Personal Portfolio",
      status: "In progress",
      description: "Currently developing a professional interactive portfolio.",
      tags: ["3D Animations", "Creative UI/UX", "Modern Web Technologies"],
    },
  ],
};