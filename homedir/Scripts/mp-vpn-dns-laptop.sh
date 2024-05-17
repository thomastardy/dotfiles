#!/bin/bash
#
# Set DDNS Hostname to current IP address
#

HOST=tardy-laptop.dyndns.org
USER=mptechnology-dynamic
URL=https://members.dyndns.org
PASSWORD_OR_KEY=bfcebd82589311e48aa0c825f89975e6

#HOST=magun.ddns.net
#URL=https://dynupdate.no-ip.com
#USER=magun@mptechnology.ch
#PASSWORD_OR_KEY=<no-ip password>

MYIP=$(curl -s -4 https://www.mptechnology.ch/myip.php | xargs) # xargs trims white space returned by HTTP Call
DOMAIN=$(echo $HOST | cut -f2- -d.)
NS=$(dig NS $DOMAIN +short | sort | head -1) # Alphabetically first NS of Domain
echo $(date) DDNS Hostname \'$HOST\'
echo $(date) Nameserver \'$NS\' selected for checking if IP update has been completed
echo $(date) Updating \'$HOST\' to \'$MYIP\'
echo $(date) $(curl -s -u $USER:$PASSWORD_OR_KEY $URL/nic/update?hostname=$HOST&myip=$MYIP)
DNSIP=$(dig @$NS +short $HOST)
while [ "$DNSIP" != "$MYIP" ]
do
  echo $(date) Waiting for DDNS Update to become visible on Nameserver \'$NS\' for \'$DOMAIN\', sleeping...
  sleep 1
  DNSIP=$(dig @$NS +short $HOST)
done
echo $(date) DDNS Hostname \'$HOST\' updated to \'$DNSIP\'
echo $(date) Knocking...
ncat -z -w1 gk.mptechnology.ch 47612
echo $(date) Done
