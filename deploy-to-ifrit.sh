#!/bin/bash
ssh -A ifrit.clockhosting.com -t 'cd /var/application/Clock/DevGuides; git pull && pliers build && sudo restart node-clock-dev-guides'
