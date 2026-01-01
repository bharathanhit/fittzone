@echo off
echo Initialization... > git_push_log.txt
git init >> git_push_log.txt 2>&1
echo Adding files... >> git_push_log.txt
git add . >> git_push_log.txt 2>&1
echo Committing... >> git_push_log.txt
git commit -m "Update from Antigravity" >> git_push_log.txt 2>&1
echo Setting remote... >> git_push_log.txt
git remote add origin https://github.com/bharathanhit/fittzone.git >> git_push_log.txt 2>&1
git remote set-url origin https://github.com/bharathanhit/fittzone.git >> git_push_log.txt 2>&1
echo Pushing... >> git_push_log.txt
git push -u origin main >> git_push_log.txt 2>&1
echo Done. >> git_push_log.txt
