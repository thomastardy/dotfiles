#!/usr/bin/env bash

# stop execution whenever a command execution fails
set -e

JIRA_URL="https://mp-technology.atlassian.net"
PROJECT_KEY="$1"
ISSUETYPE_NAME="$2"
PARENT_KEY="$3"
COMPONENT_NAME="$4"
SUMMARY="$5"
DESCRIPTION="$6"

template='{
  "fields": {
    "summary": "%s",
    "issuetype": {
      "name": "%s"
    },
    "project": {
      "key": "%s"
    },
    "parent": {
      "key": "%s"
    },
    "components": [
      {
        "name": "%s"
      }
    ],
    "description": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "text": "%s",
              "type": "text"
            }
          ]
        }
      ]
    }
  }
}'

json_final=$(printf "$template" \
		    "$SUMMARY" \
		    "$ISSUETYPE_NAME" \
		    "$PROJECT_KEY" \
		    "$PARENT_KEY" \
		    "$COMPONENT_NAME" \
		    "$DESCRIPTION")

result=$(curl -s -X POST \
	  -u tardy@mptechnology.ch:$JIRA_API_TOKEN \
	  -H "Content-Type:application/json" \
	  -H "X-Atlassian-Token:no-check" \
	  "$JIRA_URL/rest/api/3/issue/" \
	  -d \
	  "$json_final")

#echo $result

key=$(jq -r '.key' <<< $result)
echo "create issue $JIRA_URL/browse/$key"
