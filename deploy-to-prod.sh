#!/bin/bash
ssh -A clock-shared-node-01.clockhosting.com -t 'cd /var/application/Clock/DevGuides; git pull && nave use 0.10.33 npm install && nave use 0.10.33 npm i -g pliers && nave use 0.10.33 pliers build && sudo stop node-clock-dev-guides; sudo start node-clock-dev-guides'
