#!/usr/bin/env bash

# stop execution whenever a command execution fails
set -e

echo "id,name,subtask"
curl -s \
     -u tardy@mptechnology.ch:$JIRA_API_TOKEN \
     "https://mp-technology.atlassian.net/rest/api/3/issuetype" \
    | jq -r '.[] | "\(.id),\(.name),\(.subtask)"' | sort

# id,name,subtask
# 1,Bug,false
# 10000,Story,false
# 10001,Epic,false
# 10201,Analysis,false
# 10202,Specification,false
# 2,New Feature,false
# 3,Task,false
# 4,Improvement,false
# 5,Sub-task,true
# 6,Change Request,false
# 7,Idea,false
# 8,Maintenance Task,false
# 9,Support Ticket,false
