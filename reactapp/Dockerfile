FROM ubuntu:22.04

WORKDIR /usr/src/app
COPY . .

ENV DEBIAN_FRONTEND noninteractive

RUN chmod u+r+x start.sh \
    && apt update && apt upgrade -y \
    && apt install curl -y \
    && curl -sL https://deb.nodesource.com/setup_18.x | bash \
    && apt install nodejs -y \
    && npm install

CMD ./start.sh

EXPOSE 5005

# docker build -t react . 
# docker run -p 5005:5005 -d react