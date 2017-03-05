#!/bin/sh

grunt build -f
cp app.yaml src/main/webapp/WEB-INF/static/dist/
gcloud --project cfp-gdglille app deploy --version v3 --quiet src/main/webapp/WEB-INF/static/dist/app.yaml
mvn clean appengine:update -DskipTests