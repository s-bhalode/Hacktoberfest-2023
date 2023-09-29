# Contribution Rules 👇👇
🛑 You are allowed to make pull requests that break the rules. We just merge it.<br/>
🛑 Do NOT add any build steps e.g npm install (keep this as a simple static site).<br/>
🛑 Do NOT remove other content.<br/>
🛑 Add your name to the contributorsList file.<br/>
🛑 Try to keep pull requests small to minimize merge conflicts<br/>

## Geting Started😁😁:
✔ Star mark this repo.<br/>
✔ Fork this repo.<br/>
✔ Clone on your local machine<br/>
```terminal
git clone https://github.com/s-bhalode/Hacktoberfest_starter_2k23.git
```
✔ Navigate to project directory.
```terminal
cd Hacktoberfest_starter_2k23
```
✔ Create a new branch 
```markdown
git checkout -b your-name-branch
```
✔ Add your Name to `contributors/contributorsList.js`
```markdown
git add .
```
✔ Commit your changes.
```markdown
git commit -m "message"
```
✔ Then push 
```markdown
git push origin your-name-branch
```

✔ Create a new pull request from your forked repository<br/>


## Avoid Conflicts {Syncing your fork}

➡ An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.   
```terminal
git remote add upstream https://github.com/s-bhalode/Hacktoberfest_starter_2k23.git
```

➡ You can verify that the new remote has been added by typing
```terminal
git remote -v
```
➡ To pull any new changes from your parent repo simply run
```terminal
git merge upstream/master
```

