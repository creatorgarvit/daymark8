# Daymark

Daymark is a daily consistency planner for students, entrepreneurs and corporate teams.

## Included

- Calendar planner with unlimited numbered task lines, done/not-done marks, repeat schedules, reminders and automatic carry-over.
- Coaching and batch lecture planner with lecture/DPP checks, backlog, attendance percentage, editable timetable and focus mode.
- Spaced revision after 1, 3, 7 and 21 days, chapter-wise PYQ tracking, test scores and handwritten-note AI summaries.
- Water reminders and daily consistency streaks.
- Employer teams with 6-character join codes, employee assignment submission, employer review and team meetings with 8-character codes.

**Live app:** https://daymark-consistency.lovable.app

## Run locally

Use Node.js 22 or later:

```sh
npm install
cp .env.example .env.local
# Fill in the public backend values in .env.local
npm run dev
```

Run checks:

```sh
npm test
npx oj typecheck -b --noEmit
npm run build
```

## Deploy to Vercel

The project uses TanStack Start with Nitro. Nitro automatically selects its Vercel target when Vercel builds the repository; `vercel.json` sets the build command.

### Option 1: Vercel dashboard

1. Unzip the source package and push its contents to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the build command `npm run build`. No output-directory override is needed for Nitro.
4. Add every variable from `.env.example` in **Project Settings → Environment Variables**. Copy the public backend values from your existing Daymark project environment.
5. Deploy. Add the resulting Vercel domain to your backend's allowed authentication redirect URLs before testing Google sign-in.

### Option 2: Vercel CLI

```sh
npm install
npx vercel
```

Follow the prompts, add the environment variables in the Vercel dashboard, then run:

```sh
npx vercel --prod
```

## Backend and AI notes

- Team accounts, assignments, meetings and uploaded work use the existing hosted Lovable Cloud backend. A Vercel deployment talks to that same backend through the public URL and publishable key; no private database password is included in this source package.
- Personal planner and study records are stored in the browser on the current device.
- AI note summaries run on the server and require a private `LOVABLE_API_KEY`. They are not available if that variable is missing on Vercel. Never expose it with a `VITE_` prefix.
- Database schema and migration history are included under `drizzle/` for reference. Applying them is separate from deploying the Vercel frontend/server application.
