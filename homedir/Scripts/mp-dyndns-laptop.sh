#!/bin/bash
#
# Set DynDNS Hostname to current IP address
#
# xargs trims white space returned by HTTP Call
#
IP=$(curl -s -k -4 https://www.mptechnology.ch/myip.php | xargs)
HOST=tardy-laptop.dyndns.org
echo Updating \'$HOST\' to \'$IP\'
curl -k -u mptechnology-dynamic:bfcebd82589311e48aa0c825f89975e6 https://members.dyndns.org/nic/update?hostname=$HOST\&myip=$IP
echo
