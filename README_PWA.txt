NM Induction Log — PWA (Installable App)

How to configure
1) Open config.js and replace API_URL with your endpoint:
   - Google Apps Script Web App URL (Option A), or
   - PHP endpoint URL (Option B), e.g., https://yourdomain.com/api/search.php

2) Upload all files to a HTTPS host (Netlify, GitHub Pages, Cloudflare Pages, cPanel).

3) On phone:
   - Android Chrome: menu → Install app / Add to Home screen
   - iPhone Safari: Share → Add to Home Screen

Notes
- The UI works offline (cached). Live data needs internet to query the API.
- Fields shown are exactly: EMP # / Iqama #, Employee Name, Designation / Job, Company, Date of Induction, Inducted by, Project, Defensive Driving Briefing and Pledge, Water Flask availability, Medical Screening Status.
