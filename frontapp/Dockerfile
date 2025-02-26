# 1️⃣ 빌드 단계 (Build Stage)
FROM node:20-alpine AS builder

WORKDIR /app

# package.json과 package-lock.json 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install --frozen-lockfile

# Next.js 프로젝트 파일 복사
COPY . .

# 환경 변수 파일 복사
COPY .env.production .env.production

# Next.js 빌드 실행 (빌드 시 환경 변수 적용됨)
RUN npm run build

# 2️⃣ 실행 단계 (Run Stage)
FROM node:20-alpine

WORKDIR /app

# 빌드된 파일과 필요한 의존성만 복사
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# 환경 변수 설정 (실행 시에는 서버 사이드에서만 필요)
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]
