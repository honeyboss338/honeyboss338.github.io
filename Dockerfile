FROM python:3.10.5
ENV DJANGO_VERSION 4.0

#---------------------------------
#   Libraries
#---------------------------------
RUN apt-get update && apt-get install -y \
    gcc \
    vim \
    gettext \
    sqlite3 \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade pip


#---------------------------------
#   Django
#---------------------------------
# django
RUN pip3 install \
  django=="$DJANGO_VERSION" \
  django-bootstrap5 \
  gunicorn


#---------------------------------
#   Jekyll (github blog)
#---------------------------------
RUN apt-get update && \
    apt-get install -y ruby-full build-essential zlib1g-dev
RUN gem install jekyll bundler jekyll-coffeescript


#---------------------------------
#   Enviroment
#---------------------------------
# Timezone
ENV TZ="Asia/Tokyo"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update && \
    apt-get install -y tzdata && \
    dpkg-reconfigure -f noninteractive tzdata

# conventions
COPY files/bashrc /root/.bashrc
COPY files/vimrc /root/.vimrc

## Set the working directory
WORKDIR /home/workspace/honeyboss

EXPOSE 4000:4000