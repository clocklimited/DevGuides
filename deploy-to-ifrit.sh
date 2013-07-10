#!/bin/bash
ssh -A ifrit.clockhosting.com -t 'cd /var/application/Clock/DevGuides; git pull && pliers build && sudo stop node-clock-dev-guides && sudo start node-clock-dev-guides'
