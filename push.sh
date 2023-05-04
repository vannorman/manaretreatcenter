git add .
git commit -m $1
git push
ssh -i ~/.ssh/fresh_cut_shirts.pem -t root@143.198.79.233 "cd /home/ubuntu/manaretreat.center; git pull; sudo service apache2 restart;"


