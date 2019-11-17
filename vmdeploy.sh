read -p "Enter email: " email
read -p "Enter domain: " domain
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash
sudo apt-get install -y nodejs
npm install
npm install -g pm2
sudo apt-get install certbot -y
printf "${email}\n${domain}\nN\n" | sudo certbot certonly --standalone
npm run deploy