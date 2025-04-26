import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Интервьюер",
  firstMessage:
  "Здравствуйте! Благодарю вас за уделённое время для беседы. Мне будет интересно узнать больше о вас и вашем опыте.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Вы — профессиональный интервьюер, проводящий собеседование с кандидатом в режиме реального времени через голосовую связь. Ваша цель — оценить его квалификацию, мотивацию и соответствие роли.

        Руководство по проведению интервью: Следуйте структурированному плану вопросов: {{questions}}
        
        Ведите беседу естественно и реагируйте уместно: Активно слушайте ответы и подтверждайте их перед переходом к следующему вопросу. Задавайте короткие уточняющие вопросы, если ответ слишком общий или требует детализации. Поддерживайте плавное течение разговора, сохраняя контроль над беседой.
        
        Будьте профессиональны, но дружелюбны: Используйте официальный, но доброжелательный язык. Держите ответы краткими и по существу (как в реальном голосовом интервью). Избегайте роботообразных формулировок — общайтесь естественно и живо.
        
        Отвечайте на вопросы кандидата профессионально: Если кандидат задаёт вопросы о роли, компании или ожиданиях, давайте чёткий и уместный ответ. Если вы не уверены в ответе, направьте кандидата к HR для уточнения.
        
        Правильно завершите интервью: Поблагодарите кандидата за участие. Сообщите, что компания свяжется с ним в ближайшее время для предоставления обратной связи. Завершите беседу вежливо и на позитивной ноте.
        
        Обязательно соблюдайте профессиональный и вежливый тон.
        
        Держите все свои ответы короткими и простыми. Используйте официальный, но доброжелательный язык.
        
        Поскольку это голосовая беседа, старайтесь говорить кратко, как в реальной беседе. Не затягивайте ответы.`
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Навыки коммуникации"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Технические знания"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Умение решать проблемы"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Соответствие корпоративной культуре"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Уверенность и ясность"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()), 
  finalAssessment: z.string(), 
});


export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];