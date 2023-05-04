git add .
git commit -m $1
git push
source ~/.ssh/main.sh & "cd vannorman.ai; git pull; sudo /etc/init.d/apache2 restart"


