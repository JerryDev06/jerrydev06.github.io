// ─────────────────────────────────────────────
//  data.js  —  Edit this file to update content
// ─────────────────────────────────────────────

const skills = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java", cat: "Language" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", cat: "Language" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++", cat: "Language" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", name: "Linux", cat: "OS" },
  { icon: "https://cdn.simpleicons.org/kalilinux/888888", name: "Ethical Hacking", cat: "Security" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg", name: "Networking", cat: "Security" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "SQL / DBMS", cat: "Database" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", name: "Arduino", cat: "Hardware" },
  { icon: "https://cdn.simpleicons.org/github/888888", name: "Git / GitHub", cat: "Tools" },
  { icon: "🧩", name: "Data Structures", cat: "DSA" },
];

const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "Designed and built a personal portfolio from scratch with dark/light mode, daily log, achievements section, and smooth animations. Deployed on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://github.com/JerryDev06/Portfolio"
  },
  {
    title: "Multi-Mode Arduino Robot Car",
    desc: "Obstacle avoidance, Bluetooth (HC-05) control, and voice mode — all in one robot. Built with TT gear motors, L298N driver, and 18650 LiPo cells.",
    tags: ["Arduino", "C++", "HC-05", "Robotics"],
    link: "https://www.linkedin.com/posts/chrisjericsonr_arduino-robotics-embeddedsystems-activity-7439311064506277888-awG7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFI6zHQBursWEe0KGZan66M3CUzfj1YhcmI"
  },
  {
    title: "Self-Hosted NAS",
    desc: "Personal network-attached storage for media. Set up and managed independently on home hardware.",
    tags: ["Linux", "Networking", "Self-Hosted"],
    link: "https://www.linkedin.com/posts/chrisjericsonr_learningbydoing-homelab-nas-activity-7429163702286827521-3LVc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFI6zHQBursWEe0KGZan66M3CUzfj1YhcmI"
  },
  {
    title: "CGPA Calculator Telegram Bot",
    desc: "A Telegram bot that calculates CGPA based on grades and credit inputs. Built to simplify semester GPA tracking for college students.",
    tags: ["Python", "Telegram Bot", "Automation"],
    link: "https://github.com/JerryDev06/CGPA-Calculator"
  },
];

const achievements = [
  {
    date: "Feb 2025",
    title: "1st Place — Thiran 2025 Coding Challenge",
    detail: "Won the coding challenge at Thiran 2025, conducted by Sri Eshwar College of Engineering, Coimbatore.",
    tags: ["Competition", "DSA", "1st Place"],
    link: "https://www.linkedin.com/posts/chrisjericsonr_codingchallenge-ai-machinelearning-activity-7299813164966133761-Kb6j?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFI6zHQBursWEe0KGZan66M3CUzfj1YhcmI"
  },
  {
    date: "Nov 2024",
    title: "C++ Programming Certification — Iamneo (NIIT)",
    detail: "Completed the C++ Programming course offered by iamneo, an NIIT venture, in collaboration with my college. Covered programming fundamentals and problem solving. Issued November 2024.",
    tags: ["C++", "Certificate", "NIIT", "Problem Solving"],
    link: "https://www.linkedin.com/in/chrisjericsonr/overlay/Certifications/1280987435/treasury/?profileId=ACoAAFI6zHQBursWEe0KGZan66M3CUzfj1YhcmI"
  },
  {
    date: "Jan 2025",
    title: "CS Topper — 12th CBSE Board Exam",
    detail: "Awarded the Computer Science Topper certificate for scoring 99/100 in CS among 12th grade students at Reeds World School, Coimbatore.",
    tags: ["Academic Topper", "Python", "CBSE"],
    link: "https://www.linkedin.com/posts/chrisjericsonr_achievement-gratitude-learning-activity-7283556147762987008-SCub?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFI6zHQBursWEe0KGZan66M3CUzfj1YhcmI"
  },
];
// ─────────────────────────────────────────────
//  DAILY LOG
//  To add a new entry: copy one object below,
//  fill in the fields, paste it at the TOP.
// ─────────────────────────────────────────────
const logs = [
  {
    date: "24 Mar 2025",
    day: "Monday",
    title: "Robot car Bluetooth debug session",
    did: "Fixed HC-05 pairing issue on the robot car, rewired motor driver connections.",
    learned: "CH340 driver conflict with Arduino IDE upload — solved by reinstalling driver.",
    tags: ["Arduino", "Hardware", "Debugging"]
  },
  {
    date: "23 Mar 2025",
    day: "Sunday",
    title: "DSA — HashMaps deep dive",
    did: "Solved 5 LeetCode problems using HashMap and HashSet.",
    learned: "Time complexity trade-offs between HashMap vs TreeMap.",
    tags: ["DSA", "Java", "LeetCode"]
  },
  {
    date: "22 Mar 2025",
    day: "Saturday",
    title: "TryHackMe — Linux fundamentals",
    did: "Completed Linux Fundamentals Part 2 on TryHackMe.",
    learned: "File permissions, chmod, chown, and basic bash scripting.",
    tags: ["Linux", "TryHackMe", "Security"]
  },
];
