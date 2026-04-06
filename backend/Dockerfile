FROM python:3.13-slim

LABEL maintainer="Nicole Tregoning <nicole.tregoning@jhuapl.edu>"
LABEL description="A Docker image for the BBQS EMBER Archive Backend"

# Install system deps for Postgres
RUN apt-get update && apt-get install -y libpq-dev gcc && rm -rf /var/lib/apt/lists/*

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
fi
EOF

ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
ENV UV_HTTP_TIMEOUT=100
ENV REQUESTS_CA_BUNDLE=$SSL_CERT_FILE

ADD backend /backend
WORKDIR /backend

RUN pip install uv
RUN uv sync --frozen --no-cache --no-dev

CMD ["uv", "run", "gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "2", "--access-logfile", "-",  "--error-logfile", "-", "--capture-output", "--preload", "--log-level","info"]
