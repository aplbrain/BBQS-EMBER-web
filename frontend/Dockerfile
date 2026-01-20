FROM node:22-alpine AS frontend

LABEL maintainer="Nicole Stock <nicole.stock@jhuapl.edu>"
LABEL description="A Docker image for the BBQS EMBER Archive web frontend"

RUN sed -i 's/https/http/' /etc/apk/repositories
RUN apk update
RUN apk add ca-certificates

ARG APL_ROOT_CERT=dummy.cer
ARG APL_DOM1_CERT=dummy.cer

# (Optionally) Add APL certificates
ADD ${APL_ROOT_CERT} \
    /usr/local/share/ca-certificates/JHUAPL-MS-Root-CA-05-21-2038-B64-text.crt
ADD ${APL_DOM1_CERT} \
    /usr/local/share/ca-certificates/JHUAPL-MS-DOM1-CA-05-21-2028.crt
RUN <<EOF
if [ $APL_ROOT_CERT != "dummy.cer" ]
then
  update-ca-certificates
  npm config set cafile /etc/ssl/certs/ca-certificates.crt
fi
EOF

ADD frontend /frontend

WORKDIR /frontend

RUN npm install
RUN npm run build

CMD ["quasar","serve", "dist/spa", "--port", "8080", "--history"]
