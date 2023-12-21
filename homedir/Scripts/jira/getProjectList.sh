#!/usr/bin/env bash

# stop execution whenever a command execution fails
set -e

echo "id,key,name,lead-displayName"
curl -s \
     -u tardy@mptechnology.ch:$JIRA_API_TOKEN \
     "https://mp-technology.atlassian.net/rest/api/3/project/search?expand=lead" \
     | jq -r '.values[] | "\(.id),\(.key),\(.name),\(.lead.displayName)"' | sort

# id,key,name,lead-displayName
# 10010,PRL,PERILS Portal,Patrick Pfister
# 10011,ATE,C ATE,Jakob Magun
# 10022,MPT,mp technology Infrastructure,Michel Mathis
# 10033,VSTP,MGB VSTP,Patrick Pfister
# 10040,PGBARCHIVE,Partners Group iPad Bulletin (ARCHIVE),Christian Bachmann
# 10041,PMK,Passmaker,Jakob Magun
# 10051,MTT,mp technology Timetrack,Patrick Pfister
# 10151,CAO,Orell Füssli CAO,Jakob Magun
# 10250,WSS,Partners Group Manual Entry WSS,Benjamin Schupp
# 10450,EMT,Qatar Re EMT,Patrick Pfister
# 10750,PLF,PERILS Loss Forecast Wind Jeannie,Patrick Pfister
# 10950,SVA,SVA-QK,Andri Krämer
# 10951,MAF,Partners Group Mobile Application Framework,Jakob Magun
# 11150,MPW,mp website,Jakob Magun
# 11151,PGCA,Partners Group Contacts App,Christian Bachmann
# 11152,PGD,Partners Group Docs App,Christian Bachmann
# 11153,PGBA,Partners Group Bulletin App,Christian Bachmann
# 11154,PGMA,Partners Group My PG App,Christian Bachmann
# 11250,PGRER,Partners Group Risk & Expected Return Web Portal,Florian Nussberger
# 11350,EMA,Elektro-Material Mobile Apps,Jakob Magun
# 11450,SAY,SAYANO,Thomas Tardy
# 11550,PGME,Partners Group Memo App,Christian Bachmann
# 11651,ELSA,Eberhard eLSA,Thomas Tardy
# 11850,CRE,PERILS Cresta,Michele Schäuble
# 11950,CLI,PERILS CLIX,Michele Schäuble
# 12250,PCA,PERILS Contacts Application,Thomas Tardy
# 12350,EBIWORK,Eberhard EbiWork,Thomas Tardy
# 12450,TRM,Eberhard TRM Portal,Thomas Tardy
# 12501,PCY,PERILS Cyber,Michele Schäuble
# 12504,SLK,Smarterion luxKit App,Florian Nussberger
