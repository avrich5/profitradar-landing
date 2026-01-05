#!/bin/sh
set -e

# Supervisor needs root to manage processes
# Run Supervisor directly (user will be overridden to root in docker-compose.yml)
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf

