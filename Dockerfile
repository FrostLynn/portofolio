FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js
COPY config.js /usr/share/nginx/html/config.js
COPY cv.md /usr/share/nginx/html/cv.md

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
