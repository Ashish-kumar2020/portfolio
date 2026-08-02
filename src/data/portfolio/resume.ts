export const resumeText = `
============================================================
                    ASHISH SINGH
              Frontend Developer | React Developer
============================================================

📧 Email      : ashishsinghk2020@gmail.com
📍 Location   : India
💻 GitHub     : https://github.com/ashishsingh
🔗 LinkedIn   : https://linkedin.com/in/ashishsingh

============================================================
SUMMARY
============================================================

Frontend Developer with 4.8+ years of experience building
high-performance web applications using React, TypeScript,
Redux and Tailwind CSS. Passionate about building scalable,
responsive and user-friendly applications.

============================================================
TECHNICAL SKILLS
============================================================

• JavaScript (ES6+)
• TypeScript
• React
• Redux
• Tailwind CSS
• HTML5
• CSS3
• Node.js
• Express.js
• MongoDB
• Git
• REST APIs

============================================================
EXPERIENCE
============================================================

Arrise Solutions Pvt. Ltd.
Frontend Developer
Jun 2023 - Present

• Developed Betting Client using React and TypeScript.
• Built real-time 2D Overlay applications.
• Improved application load time by approximately 10 seconds.
• Worked with PixiJS, WebSockets and REST APIs.

============================================================
PROJECTS
============================================================

• Retro Terminal Portfolio
• DevNotes
• Kanban Board

============================================================
`;

export function downloadResume() {
  const blob = new Blob([resumeText], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Ashish_Singh_Resume.txt";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}