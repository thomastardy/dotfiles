#!/usr/bin/env bash

# stop execution whenever a command execution fails
set -e

SUMMARY="Teeeeeeeeeeeeest Summary"
DESCRIPTION="Teeeeeeeeeeeeest Description"

./createIssue.sh "ELSA" "Task" "ELSA-40" "Basis" "$SUMMARY" "$DESCRIPTION"
./createIssue.sh "ELSA" "Task" "ELSA-40" "Basis" "$SUMMARY Windream Java Client" "$DESCRIPTION"
./createIssue.sh "ELSA" "Task" "ELSA-40" "Basis" "$SUMMARY BO Kafka Adapter" "$DESCRIPTION"
./createIssue.sh "ELSA" "Task" "ELSA-40" "Basis" "$SUMMARY Web PDF Editor" "$DESCRIPTION"
./createIssue.sh "TRM" "Task" "TRM-6" "Basis" "$SUMMARY" "$DESCRIPTION"
./createIssue.sh "EBIWORK" "Task" "EBIWORK-32" "Basis" "$SUMMARY" "$DESCRIPTION"
./createIssue.sh "SAY" "Task" "SAY-247" "Basis" "$SUMMARY" "$DESCRIPTION"
./createIssue.sh "PCA" "Task" "PCA-5" "Base" "$SUMMARY" "$DESCRIPTION"
