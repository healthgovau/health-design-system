FROM mcr.microsoft.com/playwright:v1.65.1-noble

WORKDIR /work
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

ENV PLAYWRIGHT_HTML_OPEN=never
ENTRYPOINT ["npx", "playwright"]
CMD ["test"]
