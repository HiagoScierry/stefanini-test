FROM postgres:12-alpine

RUN apk add --update --no-cache tzdata \
&& rm -fr /var/cache/apk/*

EXPOSE 5432

ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "postgres" ]