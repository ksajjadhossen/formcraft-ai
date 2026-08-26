This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), built, engineered, and maintained by [Khandaker Sajjad Hossen](https://github.com/ksajjadhossen)[cite: 1].

# FormCraft AI — Smart Online Form Builder & Intelligent SaaS Ecosystem 🚀

**FormCraft AI** is an enterprise-grade, production-ready, full-stack AI-driven SaaS platform meticulously designed to completely replace legacy manual form builders like Google Forms and Typeform. By bridging the gap between natural language processing and relational database architecture, users can instantly prompt, generate, validate, and publish rich interactive forms within seconds.

🌐 **Live Production Link:** [https://formcraft-ai-k.vercel.app/](https://formcraft-ai-k.vercel.app/)[cite: 1]  
📂 **GitHub Repository:** [https://github.com/ksajjadhossen/formcraft-ai](https://github.com/ksajjadhossen/formcraft-ai)[cite: 1]

---

## 👨‍💻 Developer Profile & Contact

- **Developer:** Khandaker Sajjad Hossen
- **GitHub:** [https://github.com/ksajjadhossen](https://github.com/ksajjadhossen)
- **LinkedIn:** [https://www.linkedin.com/in/ksajjadhossen/](https://www.linkedin.com/in/ksajjadhossen/)
- **Portfolio:** [https://ksajjadhossen.vercel.app/](https://ksajjadhossen.vercel.app/)

---

## 💡 Engineering Vision & Core Capabilities

- **AI-Powered Form Generation Engine:** Harnesses Google Gemini to translate abstract natural language descriptions into pristine, fully structured schema models instantly[cite: 1].
- **AI Sentiment & Response Intelligence:** Aggregates user form submissions in real time to synthesize executive-level sentiment reports and crucial trend insights[cite: 1].
- **Dynamic Public Form Rendering:** Deploys dedicated public routes (`/f/[formId]`) allowing frictionless, responsive cross-device response collection[cite: 1].
- **Secure Auth & Monetization Pipeline:** Integrates Clerk Auth for fine-grained user management alongside a fully verified Stripe Checkout and webhook subscription lifecycle[cite: 1].
- **Modern Type-Safe Architecture:** Built from the ground up leveraging rigorous runtime validations and optimized server-client component boundaries.

---

## 🛠️ Enterprise Tech Stack & Tooling

- **Frontend Framework:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Shadcn UI, Lucide React[cite: 1]
- **Backend & Persistence:** Node.js, Next.js Edge Route Handlers, PostgreSQL (Neon Cloud), Prisma ORM, Zod Schema Validation[cite: 1]
- **Security & Ecosystem Services:** Clerk Authentication (OAuth 2.0), Stripe Billing API, Google Gemini AI SDK[cite: 1]

---

## 📁 System Architecture & Directory Structure

```text
formcraft-ai/
├── prisma/                  # Relational database schema definitions and migration scripts
├── public/                  # Optimized static assets, graphics, and brand media
├── src/
│   ├── actions/             # Server actions handling core mutations (AI logic, form operations)
│   ├── app/                 # Next.js App Router (File-system based pages & API route handlers)
│   │   ├── (dashboard)/     # Authenticated user dashboard routes and metrics
│   │   ├── api/             # Backend endpoints (AI generation, Stripe checkout, form submission)
│   │   ├── create-form/     # Interactive natural-language AI form creation workspace
│   │   ├── forms/           # Form management hub & dynamic response rendering views ([formId])
│   │   ├── pricing/         # Stripe subscription tier selection & upgrade interface
│   │   ├── sign-in/         # Custom Clerk authentication integration (Sign In module)
│   │   ├── sign-up/         # Custom Clerk authentication integration (Sign Up module)
│   │   ├── layout.tsx       # Global root layout wrapping providers and context states
│   │   └── page.tsx         # High-conversion SaaS landing page
│   ├── components/          # Reusable atomic UI elements, layout wrappers, and feature blocks
│   ├── lib/                 # Database initialization utilities and Prisma client singleton setup
│   ├── utils/               # Shared formatting helpers and utility calculations
│   └── middleware.ts        # Edge-level Clerk authentication guard protecting secure sub-routes
├── .env                     # Environment variables configuration template
├── .gitignore               # Ignored build artifacts and secret configurations
├── components.json          # Shadcn UI design system integration parameters
└── README.md                # Comprehensive project documentation
```
