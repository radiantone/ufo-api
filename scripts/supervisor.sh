ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

touch /opt/ufo/api.log
supervisord -n -c supervisord.conf &
tail -f /opt/ufo/*log
