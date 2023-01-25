FROM ubuntu:22.04

WORKDIR /usr/src/app
COPY . .

ENV DEBIAN_FRONTEND noninteractive
RUN chmod u+r+x start.sh \
    && apt update && apt upgrade -y \
    && apt install python3-pip -y \
    && apt install python-is-python3 \
    && pip install --upgrade pip \
    && pip install flask==2.0.1 \
    && pip install -U flask-cors

CMD ./start.sh

EXPOSE 5001
# docker build -t flask . 
# docker run -p 5001:5001 -d flask